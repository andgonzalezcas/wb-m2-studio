import { useState } from "react";
import FormInput from "@/components/atoms/formInput";
import { useLanguage } from "@/hooks/useLanguage";
import FieldSetInput from "@/components/atoms/fielsetInput";
import { toast } from "react-toastify";
import { handleWhatsAppClick } from "@/utils/whatsapp";

interface ReformFormData {
    name: string;
    email: string;
    phone: string;
    postalCode: string;
    reformType: string;
    bathrooms: string;
    bedrooms: string;
    floorType: string;
    windowChange: string;
    climatization: string;
    heating: string;
    surface: string;
    finishQuality: string;
    startDate: string;
    comments: string;
    terms: boolean;
}

const ReformForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<ReformFormData>({
        name: '',
        email: '',
        phone: '',
        postalCode: '',
        reformType: '',
        bathrooms: '',
        bedrooms: '',
        floorType: '',
        windowChange: '',
        climatization: '',
        heating: '',
        surface: '',
        finishQuality: '',
        startDate: '',
        comments: '',
        terms: false,
    });

    const handleChange = (key: keyof ReformFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const googleFormUrl = "http://docs.google.com/forms/d/e/1FAIpQLSfLcXSx5AaZmnadgiXqSa7khF8MPY_twQFxvrFRSINb2Gcm4Q/formResponse";

        const form = new FormData();
        form.append('entry.1874729328', formData.bathrooms);
        form.append('entry.3435720', formData.bedrooms);
        form.append('entry.754647621', formData.surface);
        form.append('entry.2005620554', formData.name);
        form.append('entry.1045781291', formData.email);
        form.append('entry.1166974658', formData.phone);
        form.append('entry.1065046570', formData.postalCode);
        form.append('entry.839337160', formData.comments);
        form.append('entry.1859130229', formData.reformType);
        form.append('entry.430495335', formData.floorType);
        form.append('entry.117118569', formData.windowChange);
        form.append('entry.366453450', formData.climatization);
        form.append('entry.796152634', formData.heating);
        form.append('entry.259138605', formData.finishQuality);
        form.append('entry.1481457655', `${formData.terms && "He leído y acepto la Política de Privacidad: https://policies.google.com/privacy"}`);
        form.append('emailAddress', formData.email);

        const [year, month, day] = formData.startDate.split("-")
        form.append('entry.733172617_year', year);
        form.append('entry.733172617_month', month);
        form.append('entry.733172617_day', day);

        try {
            await fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: form
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                postalCode: '',
                reformType: '',
                bathrooms: '',
                bedrooms: '',
                floorType: '',
                windowChange: '',
                climatization: '',
                heating: '',
                surface: '',
                finishQuality: '',
                startDate: '',
                comments: '',
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

    return (
        <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="name"
                placeholder={t("forms.renovation.form.name")}
                required
                value={formData.name}
                onChange={(val) => handleChange("name", val)}
            />
            <FormInput
                type="email"
                name="email"
                placeholder={t("forms.renovation.form.email")}
                required
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
            />
            <FormInput
                type="tel"
                name="phone"
                placeholder={t("forms.renovation.form.phone")}
                required
                value={formData.phone}
                onChange={(val) => handleChange("phone", val)}
            />
            <FormInput
                type="text"
                name="postalCode"
                placeholder={t("forms.renovation.form.postalCode")}
                required
                value={formData.postalCode}
                onChange={(val) => handleChange("postalCode", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.reformType")}
                options={["Integral", "Semi integral", "Solo baños", "Solo cocina", "Solo baños y cocina", "Cambio de uso", "Vivienda turistica", "Otro"]}
                optionsChecked={formData.reformType}
                onChange={(val) => handleChange("reformType", val)}
            />

            <FormInput
                required
                type="number"
                name="bathrooms"
                placeholder={t("forms.renovation.form.bathrooms")}
                value={formData.bathrooms}
                onChange={(val) => handleChange("bathrooms", val)}
            />
            <FormInput
                required
                type="number"
                name="bedrooms"
                placeholder={t("forms.renovation.form.bedrooms")}
                value={formData.bedrooms}
                onChange={(val) => handleChange("bedrooms", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.floorType")}
                options={["Laminado", "Gres porcelánico", "Otro"]}
                optionsChecked={formData.floorType}
                onChange={(val) => handleChange("floorType", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.windowChange")}
                options={["Sí", "No"]}
                optionsChecked={formData.windowChange}
                onChange={(val) => handleChange("windowChange", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.climatization")}
                options={["Conductos", "Split", "No"]}
                optionsChecked={formData.climatization}
                onChange={(val) => handleChange("climatization", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.heating")}
                options={["Radiadores", "Suelo radiante", "No"]}
                optionsChecked={formData.heating}
                onChange={(val) => handleChange("heating", val)}
            />

            <FormInput
                required
                type="number"
                name="surface"
                placeholder={t("forms.renovation.form.surface")}
                value={formData.surface}
                onChange={(val) => handleChange("surface", val)}
            />

            <FieldSetInput
                required
                type="radio"
                legend={t("forms.renovation.form.finishQuality")}
                options={["Medio", "Medio alto", "Alto"]}
                optionsChecked={formData.finishQuality}
                onChange={(val) => handleChange("finishQuality", val)}
            />

            <FormInput
                required
                type="date"
                name="startDate"
                placeholder={t("forms.renovation.form.startDate")}
                value={formData.startDate}
                onChange={(val) => handleChange("startDate", val)}
            />

            <textarea
                name="comment"
                placeholder={t("forms.renovation.form.comments")}
                className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%] h-60"
                onChange={(e) => setFormData((prev) => ({ ...prev, comments: e.target.value }))}
                value={formData.comments}
            />

            <label className="flex items-center gap-2 text-sm">
                <input
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={(e) => handleChange("terms", e.target.checked)}
                />
                {t("forms.renovation.form.terms")}
            </label>

            <button type="submit" className="py-1 px-4 border rounded-full self-start">
                {t("forms.renovation.form.send")}
            </button>
        </form>
    );
};

export default ReformForm;
