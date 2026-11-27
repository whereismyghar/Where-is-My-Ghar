(() => {
  const supportedLanguages = ["en", "hi", "hinglish"];

  const getValue = (language, catalog, key) => {
    const selectedCatalog = catalog[language];
    const englishCatalog = catalog.en;
    return selectedCatalog?.[key] ?? englishCatalog?.[key] ?? key;
  };

  window.wimgI18n = Object.freeze({
    getValue,
    resolveLanguage(candidates, fallback = "en") {
      return candidates.find((language) => supportedLanguages.includes(language)) || fallback;
    },
    t(language, catalog, key, values) {
      const message = getValue(language, catalog, key);
      if (typeof message !== "string") return key;
      return values
        ? message.replace(/\{(\w+)\}/g, (match, name) => String(values[name] ?? match))
        : message;
    },
  });
})();
