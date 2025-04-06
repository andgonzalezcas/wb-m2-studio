import { useState } from "react";
import FormInput from "@/components/atoms/formInput"; // Asumo que este es tu input controlado
import { useLanguage } from "@/hooks/useLanguage";
import FieldSetInput from "@/components/atoms/fielsetInput";

interface CollaboratorsFormData {
    name: string;
    email: string;
    phone: string;
    profile: string;
    company: string;
    collaborators: string[];
    otherCollaborator: string;
    city: string;
    postalCode: string;
    comments: string;
    terms: boolean;
}

const ProfessionalForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<CollaboratorsFormData>({
        name: "",
        email: "",
        phone: "",
        profile: "",
        company: "",
        collaborators: [],
        otherCollaborator: "",
        city: "",
        postalCode: "",
        comments: "",
        terms: false,
    });

    const toggleArrayValue = (value: string) => {
        setFormData((prev) => {
            const updatedArray = prev.collaborators.includes(value)
                ? prev.collaborators.filter((v) => v !== value)
                : [...prev.collaborators, value];
            return { ...prev, collaborators: updatedArray };
        });
    };

    const handleChange = (key: keyof CollaboratorsFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("Formulario enviado (simulado).");
    };

    const collaboratorOptions = [
        "Inmobiliaria",
        "Arquitecto",
        "Interiorista",
        "Promotor",
        "API",
        "Otro"
    ];

    return (
        <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="name"
                placeholder={t("forms.professional.form.name")}
                value={formData.name}
                onChange={(val) => handleChange("name", val)}
                required
            />
            <FormInput
                type="email"
                name="email"
                placeholder={t("forms.professional.form.email")}
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
                required
            />
            <FormInput
                type="tel"
                name="phone"
                placeholder={t("forms.professional.form.phone")}
                value={formData.phone}
                onChange={(val) => handleChange("phone", val)}
                required
            />
            <FormInput
                type="text"
                name="profile"
                placeholder={t("forms.professional.form.profile")}
                value={formData.profile}
                onChange={(val) => handleChange("profile", val)}
                required
            />
            <FormInput
                type="text"
                name="company"
                placeholder={t("forms.professional.form.company")}
                value={formData.company}
                onChange={(val) => handleChange("company", val)}
                required
            />

            {/* Colaboradores */}
            <FieldSetInput
                legend={t("forms.professional.form.collaborators")}
                options={collaboratorOptions}
                optionsChecked={formData.collaborators}
                onChange={toggleArrayValue}
            />
            <FormInput
                type="text"
                name="city"
                placeholder={t("forms.professional.form.city")}
                value={formData.city}
                onChange={(val) => handleChange("city", val)}
                required
            />
            <FormInput
                type="text"
                name="postalCode"
                placeholder={t("forms.professional.form.postalCode")}
                value={formData.postalCode}
                onChange={(val) => handleChange("postalCode", val)}
                required
            />

            <textarea
                name="comments"
                placeholder={t("forms.professional.form.comments")}
                className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%] h-60"
                onChange={(e) => handleChange("comments", e.target.value)}
                value={formData.comments}
            />

            <label className="flex items-center gap-2 text-sm">
                <input
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={(e) => handleChange("terms", e.target.checked)}
                />
                {t("forms.professional.form.terms")}
            </label>

            <button type="submit" className="py-1 px-4 border rounded-full self-start">
                {t("forms.professional.form.send")}
            </button>
        </form>
    );
};

export default ProfessionalForm;
