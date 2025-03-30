import { Sections } from "@/enums/global";
import { handleNavigation } from "@/utils/common";
import { useLingui } from "@lingui/react/macro";
import { MouseEvent } from "react";
import en from "@/locale/en.json";
import es from "@/locale/es.json";

interface props {
    isDark: boolean
}

const messages = { en, es };

const Menubar = ({ isDark }: props) => {
    const { i18n } = useLingui();

    const toggleLanguage = (e: MouseEvent) => {
        e.stopPropagation();
        const newLang = i18n.locale === "es" ? "en" : "es";
        i18n.load(newLang, messages[newLang]);
        i18n.activate(newLang);
        document.documentElement.lang = newLang;
    };

    return (
        <div
            onClick={() => handleNavigation(Sections.INTRODUCTION)}
            className={`h-screen w-fit fixed top-0 right-0 hidden xl:flex flex-col justify-between items-center border-l bg-opacity-0 text-white font-normal p-5 transition-colors duration-300 ${isDark ? "border-[#232C33]/40" : "border-white/40"}`}
        >
            <section className="flex flex-col gap-2 cursor-pointer py-5 px-3">
                <div className={`w-7 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
                <div className={`w-4 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
            </section>

            <button onClick={toggleLanguage} className={`rounded text-2xl font-extralight ${isDark ? "text-[#232C33]" : "text-white"}`}>
                {i18n.locale === "es" ? "ES" : "EN"}
            </button>
        </div>
    )
}

export default Menubar;