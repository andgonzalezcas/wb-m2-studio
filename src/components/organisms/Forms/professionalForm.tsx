import { useState } from "react";
import FormInput from "@/components/atoms/formInput"; // Asumo que este es tu input controlado
import { useLanguage } from "@/hooks/useLanguage";
import FieldSetInput from "@/components/atoms/fielsetInput";
import { toast } from "react-toastify";
import { handleWhatsAppClick } from "@/utils/whatsapp";

interface CollaboratorsFormData {
    name: string;
    email: string;
    phone: string;
    profile: string;
    company: string;
    collaborators: string;
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
        collaborators: "",
        otherCollaborator: "",
        city: "",
        postalCode: "",
        comments: "",
        terms: false,
    });

    const handleChange = (key: keyof CollaboratorsFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc9YSzgaY-ZI7l4NMwmUQEM7D4yhbQAG_B3uQfRP-3DNXzhlA/formResponse';

        const form = new FormData();
        form.append('entry.2005620554', formData.name);
        form.append('entry.8064698', formData.profile);
        form.append('entry.1360669804', formData.company);
        form.append('entry.383973379', formData.city);
        form.append('entry.1045781291', formData.email);
        form.append('entry.1166974658', formData.phone);
        form.append('entry.1065046570', formData.postalCode);
        form.append('entry.839337160', formData.comments);
        form.append('entry.1917880232', formData.collaborators); 
        form.append('entry.1481457655', formData.terms ? "He leído y acepto la Política de Privacidad: https://policies.google.com/privacy" : "");
        form.append('emailAddress', formData.email);

        try {
            await fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: form
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                profile: "",
                company: "",
                collaborators: "",
                otherCollaborator: "",
                city: "",
                postalCode: "",
                comments: "",
                terms: false,
            });

            toast.success(
                <div>
                    <p>Formulario enviado con éxito.</p>
                    <p>
                        Si deseas agilizar el proceso, puedes contactarnos directamente vía{" "}
                        <button
                            onClick={handleWhatsAppClick}
                            className="underline text-blue-400"
                        >
                            WhatsApp
                        </button>
                        .
                    </p>
                </div>
            );
        } catch (error) {
            toast.error('Error al enviar el mensaje. Por favor, intente nuevamente o comuníquese con nosotros por whatsapp.');
        }
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
                type="radio"
                legend={t("forms.professional.form.collaborators")}
                options={collaboratorOptions}
                optionsChecked={formData.collaborators}
                onChange={(val) => handleChange("collaborators", val)}
                required
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
