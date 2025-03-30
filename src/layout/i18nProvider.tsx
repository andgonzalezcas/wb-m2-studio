import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import en from "@/locale/en.json";
import es from "@/locale/es.json";

const messages = { en, es };

const getUserLocale = () => (navigator.language.startsWith("es") ? "es" : "en");

const loadLocale = (locale: "en" | "es") => {
    document.documentElement.lang = locale;
    i18n.load(locale, messages[locale]);
    i18n.activate(locale);
};

const I18nWrapper = ({ children }: { children: React.ReactNode }) => {
    // const locale = getUserLocale();
    const locale = "es";
    loadLocale(locale);

    return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default I18nWrapper;
