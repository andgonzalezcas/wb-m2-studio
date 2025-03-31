import m2Icon from "@/assets/m2studio/icon.svg";
import LinkButton from "@/components/atoms/linkButton";
import OvalButton from "@/components/atoms/ovalButton";
import { Sections } from "@/enums/global";
import { handleNavigation } from "@/utils/common";
import { useLanguage } from "@/hooks/useLanguage";
import { MouseEvent } from "react";

const Option = ({ label, section, count, onClose }: {
    label: string,
    section: Sections,
    count: number,
    onClose: () => void
}) => {
    return (
        <div className="flex w-full justify-between text-white">
            <p className="text-left text-3xl">{label}
                <span className="text-xs font-light"> [{count}]</span>
            </p>
            <OvalButton onClick={() => {
                handleNavigation(section)
                onClose();
            }} />
        </div>
    );
}

const ModalMenu = ({ onClose }: { onClose: () => void }) => {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = (e: MouseEvent) => {
        e.stopPropagation();
        const newLang = language === "es" ? "en" : "es";
        setLanguage(newLang);
    };

    const sections = [
        { label: "Home", link: Sections.INTRODUCTION },
        { label: t("sections.ourTeam"), link: Sections.OUR_TEAM },
        { label: t("sections.ourWay"), link: Sections.OUR_WAY },
        { label: t("sections.whyChooseUs"), link: Sections.WHY_CHOOSE_US },
        { label: t("sections.recentProjects"), link: Sections.RECENT_PROJECTS },
        { label: t("sections.contact"), link: Sections.CONTACT },
    ];

    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#232C33] p-5 flex flex-col justify-between">
            <div className="flex justify-between w-full">
                {/* Logo */}
                <img
                    src={m2Icon}
                    alt="Logo de M2 Studio"
                    width="52"
                    height="52"
                    className={`transition-all duration-300`}
                />

                <button onClick={toggleLanguage} className={`rounded text-2xl font-extralight text-white`}>
                    {language === "es" ? "ES" : "EN"}
                </button>

                <div className="w-10 pt-3">
                    <OvalButton onClick={onClose} rotated />
                </div>
            </div>

            {/* Menu Options */}
            <div className="flex flex-col gap-5">
                {sections.map((item, index) => {
                    return (
                        <Option
                            key={index}
                            label={item.label}
                            section={item.link}
                            count={index + 1}
                            onClose={onClose}
                        />
                    );
                })}
            </div>

            {/* Footer */}
            <div className="w-full border-t text-white">
                <p className="text-left font-light py-3 text-sm">{t("general.serviceList.followUs")}</p>
                <div className="flex justify-between pt-3">
                    <LinkButton
                        label="Instagram"
                        link="https://www.instagram.com/m2studio.es/?igsh=MWhsb2xsMXp4MzQ4aw%3D%3D"
                        color="white"
                    />
                    <LinkButton
                        label="Linkedin"
                        link="https://www.linkedin.com/company/m-2studio/"
                        color="white"
                    />
                    <LinkButton
                        label="Threads"
                        link="https://www.threads.net/@m2studio.es?xmt=AQGzj_tLNNbXH8f_wM_hnUh44SPj_4v60ZKzNA-sNcFJlyw"
                        color="white"
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalMenu;