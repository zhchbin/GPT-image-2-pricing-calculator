const PRICING = {
  label: "Standard",
  textInput: 5,
  imageOutput: 30,
};

const DEFAULT_LANGUAGE = "en";

const TRANSLATIONS = {
  zh: {
    meta: {
      title: "GPT Image 2 价格计算器 | OpenAI 图片生成成本估算",
      description:
        "免费的 GPT Image 2 价格计算器，按 prompt、图片尺寸、质量、生成张数和人民币汇率估算 OpenAI gpt-image-2 文生图成本。",
      ogLocale: "zh_CN",
      siteName: "GPT Image 2 价格计算器",
      ogTitle: "GPT Image 2 价格计算器",
      ogDescription: "输入 prompt、尺寸、质量和张数，快速估算 OpenAI gpt-image-2 图片生成美元与人民币成本。",
      twitterTitle: "GPT Image 2 价格计算器",
      twitterDescription: "按 output tokens 和当前费率估算 gpt-image-2 图片生成成本，支持人民币换算。",
    },
    hero: {
      title: "图片生成价格计算器",
      intro: "输入 prompt、图片尺寸和质量，按官方 output token 估算逻辑与当前价格表拆分成本。",
    },
    pricing: {
      aria: "当前价格",
      textInput: "文本输入 / 1M tokens",
      imageOutput: "图像输出 / 1M tokens",
    },
    calculator: {
      aria: "价格计算器",
    },
    form: {
      promptLabel: "Prompt 文本",
      promptPlaceholder: "例如：一张电商主图，白色背景，展示一只透明玻璃水杯，柔和自然光，画面干净...",
      qualityLabel: "质量",
      quantityLabel: "生成张数",
      widthLabel: "宽度 px",
      heightLabel: "高度 px",
      exchangeLabel: "人民币汇率",
      cnyDisplay: "人民币显示",
      cnyToggle: "显示 CNY 估算",
      presetsAria: "常用尺寸",
    },
    results: {
      totalLabel: "预计总价",
      perImageLabel: "单张成本",
      textTokens: "输入文本 tokens",
      textCost: "文本输入成本",
      imageTokens: "单张输出 tokens",
      imageCost: "图片输出成本",
      exchangeRate: "人民币汇率",
      currentRate: "当前费率",
      note: "Prompt token 是浏览器端近似估算；实际账单以 API 返回的 usage 为准。编辑接口的输入图片 tokens 未包含在此计算器内。",
    },
    links: {
      outputTokens: "Output token 文档",
      pricing: "Pricing 文档",
    },
    seo: {
      title: "GPT Image 2 图片生成成本估算工具",
      p1: "这个在线计算器用于估算 OpenAI gpt-image-2 的图片生成价格。你可以输入中文或英文 prompt，选择 low、medium、high 质量档位，设置图片宽高和生成张数，然后查看文本输入 tokens、单张输出 tokens、美元成本以及人民币换算结果。",
      p2: "当前 Standard 费率按文本输入 $5 / 1M tokens、图像输出 $30 / 1M tokens 计算。图片 output tokens 会受尺寸、长宽比例和质量档位影响，因此同样的 prompt 在 1024 x 1024、1536 x 1024、2048 x 2048 等尺寸下会产生不同成本。",
      p3: "本工具适合在调用 OpenAI Images API 前做预算评估、批量生成报价、内容生产成本预估和 AI 图片服务定价参考。最终账单仍以 OpenAI API 返回的 usage 和官方账单为准。",
    },
    validation: {
      sizeRequired: "请输入大于 0 的整数宽度和高度。",
      step: "宽度和高度都必须是 16 的倍数。",
      maxPixels: (value) => `总像素不能超过 ${value}。`,
      minPixels: (value) => `总像素至少为 ${value}。`,
      maxEdge: (value) => `最长边不能超过 ${value}px。`,
      aspectRatio: "长短边比例不能超过 3:1。",
      exchangeRate: "人民币汇率必须是大于 0 的数字。",
    },
    dynamic: {
      invalidSize: "Invalid size",
      invalidRate: "Invalid rate",
      exchangeRate: (value) => `1 USD = ${value} CNY`,
      rateLabel: (price) => `${price.label}: text input $${price.textInput}/1M, image output $${price.imageOutput}/1M`,
    },
  },
  en: {
    meta: {
      title: "GPT Image 2 Pricing Calculator | OpenAI Image Generation Cost Estimate",
      description:
        "Free GPT Image 2 pricing calculator for estimating OpenAI gpt-image-2 image generation costs by prompt, image size, quality, quantity, and CNY exchange rate.",
      ogLocale: "en_US",
      siteName: "GPT Image 2 Pricing Calculator",
      ogTitle: "GPT Image 2 Pricing Calculator",
      ogDescription: "Enter a prompt, size, quality, and quantity to estimate OpenAI gpt-image-2 image generation costs in USD and CNY.",
      twitterTitle: "GPT Image 2 Pricing Calculator",
      twitterDescription: "Estimate gpt-image-2 image generation cost from output tokens and current rates, with optional CNY conversion.",
    },
    hero: {
      title: "Image Pricing Calculator",
      intro: "Enter a prompt, image size, and quality to break down estimated cost using the official output token logic and current rates.",
    },
    pricing: {
      aria: "Current pricing",
      textInput: "Text input / 1M tokens",
      imageOutput: "Image output / 1M tokens",
    },
    calculator: {
      aria: "Pricing calculator",
    },
    form: {
      promptLabel: "Prompt text",
      promptPlaceholder: "Example: A clean ecommerce hero image on a white background, showing a transparent glass cup in soft natural light...",
      qualityLabel: "Quality",
      quantityLabel: "Quantity",
      widthLabel: "Width px",
      heightLabel: "Height px",
      exchangeLabel: "CNY exchange rate",
      cnyDisplay: "CNY display",
      cnyToggle: "Show CNY estimate",
      presetsAria: "Common sizes",
    },
    results: {
      totalLabel: "Estimated total",
      perImageLabel: "Per image",
      textTokens: "Input text tokens",
      textCost: "Text input cost",
      imageTokens: "Output tokens per image",
      imageCost: "Image output cost",
      exchangeRate: "CNY exchange rate",
      currentRate: "Current rate",
      note: "Prompt tokens are estimated in the browser. Final billing should be checked against the usage returned by the API. Input image tokens for edit calls are not included in this calculator.",
    },
    links: {
      outputTokens: "Output token docs",
      pricing: "Pricing docs",
    },
    seo: {
      title: "GPT Image 2 Image Generation Cost Estimator",
      p1: "This online calculator estimates OpenAI gpt-image-2 image generation pricing. Enter a Chinese or English prompt, choose low, medium, or high quality, set the image size and quantity, then review input text tokens, output tokens per image, USD cost, and CNY conversion.",
      p2: "The current Standard rate uses $5 / 1M tokens for text input and $30 / 1M tokens for image output. Image output tokens vary by dimensions, aspect ratio, and quality, so the same prompt can cost differently at 1024 x 1024, 1536 x 1024, 2048 x 2048, and other sizes.",
      p3: "Use this tool for budget planning before calling the OpenAI Images API, batch generation quotes, content production estimates, and AI image service pricing references. Final billing still depends on the API usage values and official invoice.",
    },
    validation: {
      sizeRequired: "Enter integer width and height values greater than 0.",
      step: "Width and height must both be multiples of 16.",
      maxPixels: (value) => `Total pixels cannot exceed ${value}.`,
      minPixels: (value) => `Total pixels must be at least ${value}.`,
      maxEdge: (value) => `The longest edge cannot exceed ${value}px.`,
      aspectRatio: "The long-to-short edge ratio cannot exceed 3:1.",
      exchangeRate: "CNY exchange rate must be a number greater than 0.",
    },
    dynamic: {
      invalidSize: "Invalid size",
      invalidRate: "Invalid rate",
      exchangeRate: (value) => `1 USD = ${value} CNY`,
      rateLabel: (price) => `${price.label}: text input $${price.textInput}/1M, image output $${price.imageOutput}/1M`,
    },
  },
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
  languageButtons: document.querySelectorAll("[data-lang]"),
};

function detectLanguage() {
  const savedLanguage = localStorage.getItem("language");
  if (TRANSLATIONS[savedLanguage]) return savedLanguage;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const browserLanguage = browserLanguages.find(Boolean)?.toLowerCase() || "";
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("en")) return "en";
  return DEFAULT_LANGUAGE;
}

let currentLanguage = detectLanguage();

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

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], TRANSLATIONS[currentLanguage]);
}

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = t("meta.title");
  setMeta('meta[name="description"]', "content", t("meta.description"));
  setMeta('meta[property="og:locale"]', "content", t("meta.ogLocale"));
  setMeta('meta[property="og:site_name"]', "content", t("meta.siteName"));
  setMeta('meta[property="og:title"]', "content", t("meta.ogTitle"));
  setMeta('meta[property="og:description"]', "content", t("meta.ogDescription"));
  setMeta('meta[name="twitter:title"]', "content", t("meta.twitterTitle"));
  setMeta('meta[name="twitter:description"]', "content", t("meta.twitterDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((entry) => {
      const [attribute, path] = entry.split(":");
      element.setAttribute(attribute, t(path));
    });
  });

  els.languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
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
    return [t("validation.sizeRequired")];
  }

  if (width % SIZE_RULES.step !== 0 || height % SIZE_RULES.step !== 0) {
    messages.push(t("validation.step"));
  }

  const pixels = width * height;
  if (pixels > SIZE_RULES.maxPixels) {
    messages.push(t("validation.maxPixels")(numberFormat.format(SIZE_RULES.maxPixels)));
  }
  if (pixels < SIZE_RULES.minPixels) {
    messages.push(t("validation.minPixels")(numberFormat.format(SIZE_RULES.minPixels)));
  }

  const longEdge = Math.max(width, height);
  const shortEdge = Math.min(width, height);
  if (longEdge > SIZE_RULES.maxEdge) {
    messages.push(t("validation.maxEdge")(numberFormat.format(SIZE_RULES.maxEdge)));
  }
  if (longEdge / shortEdge > SIZE_RULES.maxAspectRatio) {
    messages.push(t("validation.aspectRatio"));
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
    validationMessages.push(t("validation.exchangeRate"));
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
  els.imageTokens.textContent = sizeMessages.length ? t("dynamic.invalidSize") : numberFormat.format(imageTokensPerImage);
  els.imageCost.textContent = currencyFormat.format(imageOutputCost);
  els.totalCost.textContent = currencyFormat.format(totalCost);
  els.totalCostCny.textContent = showCny && exchangeRate ? `≈ ${cnyFormat.format(totalCny)}` : "";
  els.perImageCost.textContent = currencyFormat.format(perImageCost);
  els.perImageCostCny.textContent = showCny && exchangeRate ? `≈ ${cnyFormat.format(perImageCny)}` : "";
  els.exchangeLabel.textContent = exchangeRate ? t("dynamic.exchangeRate")(exchangeRate.toFixed(4)) : t("dynamic.invalidRate");
  els.rateLabel.textContent = t("dynamic.rateLabel")(price);
  els.validationMessage.innerHTML = validationMessages.map((message) => `<div>${message}</div>`).join("");
  updateMeters(textInputCost, imageOutputCost);
}

els.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    localStorage.setItem("language", currentLanguage);
    applyTranslations();
    calculate();
  });
});

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
applyTranslations();
calculate();
