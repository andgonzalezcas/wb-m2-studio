import ImageGetter from "@/assets/ImageGetter";
import { Sections } from "@/enums/global"
import { useLanguage } from "@/hooks/useLanguage"
import ContactForm from "./contactForm";
import { useState } from "react";
import ReformForm from "./reformForm";
import ProfessionalForm from "./professionalForm";
import TabFormButton from "@/components/atoms/tabFormButton";

type forms = "contact" | "reform" | "professional";


const FormSection = () => {
    const { t } = useLanguage();
    const [activeForm, setActiveForm] = useState<forms>("contact");

    const titleSection: Record<forms, { title: string, label?: string }> = {
        contact: { title: t("contact.contact.title") },
        reform: { title: t("contact.renovation.title"), label: t("contact.renovation.label") },
        professional: { title: t("contact.professional.title") }
    };

    return (
        <div className="w-full bg-white xl:px-[93px] relative xl:border-t flex flex-col xl:flex-wrap mb-40 pt-20" id={Sections.CONTACT}>
            <div className="w-full p-10 flex flex-col gap-16 xl:hidden py-32">
                {activeForm !== "contact" && <TabFormButton
                    label={t("contact.contact.button")}
                    onClick={() => setActiveForm("contact")}
                    border
                />}
                {activeForm !== "reform" && <TabFormButton
                    label={t("contact.renovation.button")}
                    onClick={() => setActiveForm("reform")}
                    border
                />}
                {activeForm !== "professional" && <TabFormButton
                    label={t("contact.professional.button")}
                    onClick={() => setActiveForm("professional")}
                    border
                />}
            </div>
            <div className="w-full px-10 xl:p-10 xl:px-16">
                <ImageGetter
                    folder="m2studio"
                    image="dark_logo"
                    width={145}
                    classname="pl-2"
                />
                <h3 className="text-left text-4xl xl:text-8xl font-thin max-w-4xl">{titleSection[activeForm].title}</h3>
                {titleSection[activeForm].label && <p className="text-left text-lg xl:text-2xl font-light max-w-2xl mt-6 tracking-tight">{titleSection[activeForm].label}</p>}
            </div>
            <div className="flex flex-row xl:px-6">
                {activeForm === "contact" && <ContactForm />}
                {activeForm === "reform" && <ReformForm />}
                {activeForm === "professional" && <ProfessionalForm />}
                <div className="w-1/2 p-10 flex-col gap-16 hidden xl:flex">
                    {activeForm !== "contact" && <TabFormButton
                        label={t("contact.contact.button")}
                        onClick={() => setActiveForm("contact")}
                        border
                    />}
                    {activeForm !== "reform" && <TabFormButton
                        label={t("contact.renovation.button")}
                        onClick={() => setActiveForm("reform")}
                        border
                    />}
                    {activeForm !== "professional" && <TabFormButton
                        label={t("contact.professional.button")}
                        onClick={() => setActiveForm("professional")}
                        border
                    />}
                </div>
            </div>
        </div>
    )
};

export default FormSection;