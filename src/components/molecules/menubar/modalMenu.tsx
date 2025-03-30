import m2Icon from "@/assets/m2studio/icon.svg";
import LinkButton from "@/components/atoms/linkButton";
import OvalButton from "@/components/atoms/ovalButton";
import { Sections } from "@/enums/global";
import { handleNavigation } from "@/utils/common";
import { useLingui } from "@lingui/react/macro";
import en from "@/locale/en.json";
import es from "@/locale/es.json";
import { MouseEvent } from "react";

const messages = { en, es };

const Option = ({ label, section, count, onClose }: {
    label: string,
    section: Sections,
    count: number,
    onClose: () => void
}) => {
    return (
        <div className="flex w-full justify-between text-white">
            <p className="text-left text-3xl">{label}
                <span className="text-xs font-light"> [0{count}]</span>
            </p>
            <OvalButton onClick={() => {
                handleNavigation(section)
                onClose();
            }} />
        </div>
    );
}

const ModalMenu = ({ onClose }: { onClose: () => void }) => {
    const { i18n: t } = useLingui();

    const toggleLanguage = (e: MouseEvent) => {
        e.stopPropagation();
        const newLang = t.locale === "es" ? "en" : "es";
        t.load(newLang, messages[newLang]);
        t.activate(newLang);
        document.documentElement.lang = newLang;
    };

    const sections = [
        { label: "Home", link: Sections.INTRODUCTION },
        { label: t._('sections.our_team'), link: Sections.OUR_TEAM },
        { label: t._('sections.our_way'), link: Sections.OUR_WAY },
        { label: t._('sections.why_choose_us'), link: Sections.WHY_CHOOSE_US },
        { label: t._('sections.recent_projects'), link: Sections.RECENT_PROJECTS },
        { label: t._('sections.contact'), link: Sections.CONTACT },
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
                    {t.locale === "es" ? "ES" : "EN"}
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
                            count={index}
                            onClose={onClose}
                        />
                    );
                })}
            </div>

            {/* Footer */}
            <div className="w-full border-t text-white">
                <p className="text-left font-light py-3 text-sm">{t._('general.service_list.follow_us')}</p>
                <div className="flex justify-between pt-3">
                    <LinkButton
                        label="Instagram"
                        link="https://www.instagram.com/m2studio.es/?igsh=MWhsb2xsMXp4MzQ4aw%3D%3D"
                        color="white"
                    />
                    <LinkButton
                        label="Linkedin"
                        link=""
                        color="white"
                    />
                    <LinkButton
                        label="Twitter"
                        link="https://www.threads.net/@m2studio.es?xmt=AQGzj_tLNNbXH8f_wM_hnUh44SPj_4v60ZKzNA-sNcFJlyw"
                        color="white"
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalMenu;