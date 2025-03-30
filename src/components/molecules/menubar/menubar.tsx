import { Sections } from "@/enums/global";
import { handleNavigation } from "@/utils/common";
import { MouseEvent } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface props {
    isDark: boolean
}

const Menubar = ({ isDark }: props) => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = (e: MouseEvent) => {
        e.stopPropagation();
        const newLang = language === "es" ? "en" : "es";
        setLanguage(newLang);
    };

    return (
        <div
            className={`h-screen w-fit fixed top-0 right-0 hidden xl:flex flex-col justify-between items-center border-l bg-opacity-0 text-white font-normal p-5 transition-colors duration-300 ${isDark ? "border-[#232C33]/40" : "border-white/40"}`}
        >
            <section className="flex flex-col gap-2 cursor-pointer py-5 px-3" onClick={() => handleNavigation(Sections.INTRODUCTION)}>
                <div className={`w-7 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
                <div className={`w-4 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
            </section>

            <button onClick={toggleLanguage} className={`rounded text-2xl font-extralight ${isDark ? "text-[#232C33]" : "text-white"}`}>
                {language === "es" ? "ES" : "EN"}
            </button>
        </div>
    )
}

export default Menubar;