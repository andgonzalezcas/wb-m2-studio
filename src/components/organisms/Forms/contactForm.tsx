import FormInput from "@/components/atoms/formInput";
import { useLanguage } from "@/hooks/useLanguage";
import { handleWhatsAppClick } from "@/utils/whatsapp";
import { useState } from "react";
import { toast } from "react-toastify";

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

        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSddE4xStIA4d6jfJO_uVXfLKLTdTbHjTp1zf2UvIWKryIamwg/formResponse';

        const form = new FormData();
        form.append('entry.219187195', formData.name);
        form.append('entry.563990993', formData.email);
        form.append('entry.338140211', formData.phone);
        form.append('entry.1677481724', formData.message);
        form.append('entry.2007751866', `${formData.terms && "He leído y acepto la Política de Privacidad: https://policies.google.com/privacy"}`);

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

    return (
        <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="name"
                placeholder={t("forms.contact.form.name")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                value={formData.name}
            />
            <FormInput
                type="email"
                name="email"
                placeholder={t("forms.contact.form.email")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                value={formData.email}
            />
            <FormInput
                type="tel"
                name="phone"
                placeholder={t("forms.contact.form.phone")}
                required
                onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                value={formData.phone}
            />
            <textarea
                name="message"
                placeholder={t("forms.contact.form.message")}
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
                <label className="font-extralight">{t("forms.contact.form.terms")}</label>
            </div>
            <div className="w-full xl:w-[80%] flex justify-center">
                <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full w-fit">
                    {t("forms.contact.form.send")}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;