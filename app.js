const PRICING = {
  label: "Standard",
  textInput: 5,
  imageOutput: 30,
};

const QUALITY_BASE = {
  low: 16,
  medium: 48,
  high: 96,
};

const SIZE_RULES = {
  step: 16,
  minPixels: 655_360,
  maxPixels: 8_294_400,
  maxEdge: 3840,
  maxAspectRatio: 3,
};

const els = {
  form: document.querySelector("#calculator-form"),
  prompt: document.querySelector("#prompt"),
  width: document.querySelector("#width"),
  height: document.querySelector("#height"),
  quantity: document.querySelector("#quantity"),
  exchangeRate: document.querySelector("#exchange-rate"),
  showCny: document.querySelector("#show-cny"),
  totalCost: document.querySelector("#total-cost"),
  totalCostCny: document.querySelector("#total-cost-cny"),
  perImageCost: document.querySelector("#per-image-cost"),
  perImageCostCny: document.querySelector("#per-image-cost-cny"),
  textTokens: document.querySelector("#text-tokens"),
  textCost: document.querySelector("#text-cost"),
  imageTokens: document.querySelector("#image-tokens"),
  imageCost: document.querySelector("#image-cost"),
  exchangeLabel: document.querySelector("#exchange-label"),
  rateLabel: document.querySelector("#rate-label"),
  validationMessage: document.querySelector("#validation-message"),
  textMeter: document.querySelector("#text-meter"),
  imageMeter: document.querySelector("#image-meter"),
};

const numberFormat = new Intl.NumberFormat("en-US");
const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 4,
  maximumFractionDigits: 6,
});
const cnyFormat = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  minimumFractionDigits: 4,
  maximumFractionDigits: 6,
});

function selectedRadioValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function parsePositiveInteger(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0 || !Number.isInteger(number)) {
    return null;
  }
  return number;
}

function clampInteger(value, min, max) {
  const parsed = parsePositiveInteger(value);
  if (parsed === null) return min;
  return Math.min(Math.max(parsed, min), max);
}

function parseExchangeRate(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) {
    return null;
  }
  return number;
}

function validateSize(width, height) {
  const messages = [];
  if (!width || !height) {
    return ["请输入大于 0 的整数宽度和高度。"];
  }

  if (width % SIZE_RULES.step !== 0 || height % SIZE_RULES.step !== 0) {
    messages.push("宽度和高度都必须是 16 的倍数。");
  }

  const pixels = width * height;
  if (pixels > SIZE_RULES.maxPixels) {
    messages.push(`总像素不能超过 ${numberFormat.format(SIZE_RULES.maxPixels)}。`);
  }
  if (pixels < SIZE_RULES.minPixels) {
    messages.push(`总像素至少为 ${numberFormat.format(SIZE_RULES.minPixels)}。`);
  }

  const longEdge = Math.max(width, height);
  const shortEdge = Math.min(width, height);
  if (longEdge > SIZE_RULES.maxEdge) {
    messages.push(`最长边不能超过 ${numberFormat.format(SIZE_RULES.maxEdge)}px。`);
  }
  if (longEdge / shortEdge > SIZE_RULES.maxAspectRatio) {
    messages.push("长短边比例不能超过 3:1。");
  }

  return messages;
}

function calculateImageOutputTokens(width, height, quality) {
  const longEdge = Math.max(width, height);
  const shortEdge = Math.min(width, height);
  const base = QUALITY_BASE[quality];
  const shortTokens = Math.round((base * shortEdge) / longEdge);
  const widthTokens = width >= height ? base : shortTokens;
  const heightTokens = width >= height ? shortTokens : base;
  const tokenArea = widthTokens * heightTokens;

  return Math.ceil((tokenArea * (2_000_000 + width * height)) / 4_000_000);
}

function estimateTextTokens(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;

  const cjkMatches = trimmed.match(/[\u3400-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/g) || [];
  const cjkCount = cjkMatches.length;
  const withoutCjk = trimmed.replace(/[\u3400-\u9fff\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/g, "");
  const asciiChars = withoutCjk.replace(/\s+/g, "").length;
  const punctuation = (trimmed.match(/[.,!?;:，。！？；：、"'“”‘’()[\]{}<>/\\|-]/g) || []).length;

  return Math.max(1, Math.ceil(cjkCount * 1.15 + asciiChars / 4 + punctuation * 0.25));
}

function cost(tokens, pricePerMillion) {
  return (tokens / 1_000_000) * pricePerMillion;
}

function updateMeters(textCost, imageCost) {
  const total = textCost + imageCost;
  if (total <= 0) {
    els.textMeter.style.width = "0%";
    els.imageMeter.style.width = "0%";
    return;
  }

  els.textMeter.style.width = `${(textCost / total) * 100}%`;
  els.imageMeter.style.width = `${(imageCost / total) * 100}%`;
}

function calculate() {
  const width = parsePositiveInteger(els.width.value);
  const height = parsePositiveInteger(els.height.value);
  const quantity = clampInteger(els.quantity.value, 1, 1000);
  const exchangeRate = parseExchangeRate(els.exchangeRate.value);
  const showCny = els.showCny.checked;
  const quality = selectedRadioValue("quality");
  const price = PRICING;
  const textTokenCount = estimateTextTokens(els.prompt.value);
  const sizeMessages = validateSize(width, height);
  const validationMessages = [...sizeMessages];
  if (exchangeRate === null) {
    validationMessages.push("人民币汇率必须是大于 0 的数字。");
  }

  let imageTokensPerImage = 0;
  if (sizeMessages.length === 0) {
    imageTokensPerImage = calculateImageOutputTokens(width, height, quality);
  }

  const textInputCost = cost(textTokenCount, price.textInput);
  const imageOutputCost = cost(imageTokensPerImage * quantity, price.imageOutput);
  const totalCost = textInputCost + imageOutputCost;
  const perImageCost = quantity > 0 ? totalCost / quantity : totalCost;
  const totalCny = exchangeRate ? totalCost * exchangeRate : 0;
  const perImageCny = exchangeRate ? perImageCost * exchangeRate : 0;

  els.textTokens.textContent = numberFormat.format(textTokenCount);
  els.textCost.textContent = currencyFormat.format(textInputCost);
  els.imageTokens.textContent = sizeMessages.length ? "Invalid size" : numberFormat.format(imageTokensPerImage);
  els.imageCost.textContent = currencyFormat.format(imageOutputCost);
  els.totalCost.textContent = currencyFormat.format(totalCost);
  els.totalCostCny.textContent = showCny && exchangeRate ? `≈ ${cnyFormat.format(totalCny)}` : "";
  els.perImageCost.textContent = currencyFormat.format(perImageCost);
  els.perImageCostCny.textContent = showCny && exchangeRate ? `≈ ${cnyFormat.format(perImageCny)}` : "";
  els.exchangeLabel.textContent = exchangeRate ? `1 USD = ${exchangeRate.toFixed(4)} CNY` : "Invalid rate";
  els.rateLabel.textContent = `${price.label}: text input $${price.textInput}/1M, image output $${price.imageOutput}/1M`;
  els.validationMessage.innerHTML = validationMessages.map((message) => `<div>${message}</div>`).join("");
  updateMeters(textInputCost, imageOutputCost);
}

document.querySelectorAll("[data-size]").forEach((button) => {
  button.addEventListener("click", () => {
    const [width, height] = button.dataset.size.split("x");
    els.width.value = width;
    els.height.value = height;
    calculate();
  });
});

els.form.addEventListener("input", calculate);
els.form.addEventListener("change", calculate);
calculate();
