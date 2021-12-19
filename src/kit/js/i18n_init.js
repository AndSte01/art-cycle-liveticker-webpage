/**
 * Initialize the translator
 */
var i18n = new I18n({
    directory: "/locales",
    locale: getLang(),
    extension: ".json"
});

/**
 * Replacing all locations with certain name tags
 */
toTranslate = document.querySelectorAll("[data-i18n]");
for (let i of toTranslate) {
    i.textContent = i18n.__(i.getAttribute("data-i18n"));
}

/**
 * Tries to get the current language to use
 * @returns returns the language to use
 */
function getLang() {
    // .split() required for cases like "en-US"
    // split returns an array (that we don't want)
    // there are language codes containing 3 characters (so no .substr(0, 2))
    system_language = navigator.language.split("-", 1)[0]; // gets the system language (actually the browsers lang)

    supported_languages = ["de"]; // "en" is default anyway

    if (supported_languages.includes(system_language)) { // check if system language is in supported languages
        return system_language;
    } else {
        return "en"; // en ist default language
    }
}