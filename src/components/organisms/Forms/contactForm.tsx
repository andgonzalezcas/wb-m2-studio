import FormInput from "@/components/atoms/formInput";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    terms: boolean;
}

const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
        terms: false
    });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reemplaza esta URL con la de tu Google Form
        const googleFormUrl = 'TU_URL_DE_GOOGLE_FORM';

        // Reemplaza estos IDs con los de tu Google Form
        const form = new FormData();
        form.append('entry.XXXXX', formData.name);        // ID para nombre
        form.append('entry.XXXXX', formData.email);       // ID para email
        form.append('entry.XXXXX', formData.phone);       // ID para teléfono
        form.append('entry.XXXXX', formData.message);     // ID para mensaje

        try {
            await fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: form
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                terms: false
            });

            alert('Mensaje enviado con éxito');
        } catch (error) {
            alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
        }
    };

    return (
        <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                value={formData.name}
            />
            <FormInput
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                value={formData.email}
            />
            <FormInput
                type="tel"
                name="phone"
                placeholder={t("contact.phonePlaceholder")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                value={formData.phone}
            />
            <textarea
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%] h-60"
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                value={formData.message}
            />
            <div className="w-full xl:w-[80%] text-left flex gap-2 px-2">
                <input
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={(e) => setFormData((prev) => ({ ...prev, terms: e.target.checked }))}
                />
                <label className="font-extralight">{t("contact.termsLabel")}</label>
            </div>
            <div className="w-full xl:w-[80%] flex justify-center">
                <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full w-fit">
                    {t("contact.sendButton")}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;