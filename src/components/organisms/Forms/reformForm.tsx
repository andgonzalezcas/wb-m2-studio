import { useState } from "react";
import FormInput from "@/components/atoms/formInput";
import { useLanguage } from "@/hooks/useLanguage";
import FieldSetInput from "@/components/atoms/fielsetInput";

interface ReformFormData {
    name: string;
    email: string;
    phone: string;
    postalCode: string;
    reformType: string[];
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
        reformType: [],
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

    const toggleArrayValue = (key: keyof ReformFormData, value: string) => {
        setFormData((prev) => {
            const array = prev[key] as string[];
            const updatedArray = array.includes(value)
                ? array.filter((v) => v !== value)
                : [...array, value];
            return { ...prev, [key]: updatedArray };
        });
    };

    const handleChange = (key: keyof ReformFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Reemplaza esta URL con la de tu Google Form
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfCXATu3EEBYThlH5NL2Oa1q-eFoBRVQ7fZKFiD1hq5bCPklA/formResponse';

        const form = new FormData();
        form.append('entry.1337831936', formData.name);
        form.append('entry.1337831937', formData.email);
        form.append('entry.1337831938', formData.phone);
        form.append('entry.1337831939', formData.postalCode);
        form.append('entry.1337831940', formData.reformType.join(', '));
        form.append('entry.1337831941', formData.bathrooms);
        form.append('entry.1337831942', formData.bedrooms);
        form.append('entry.1337831943', formData.floorType);
        form.append('entry.1337831944', formData.windowChange);
        form.append('entry.1337831945', formData.climatization);
        form.append('entry.1337831946', formData.heating);
        form.append('entry.1337831947', formData.surface);
        form.append('entry.1337831948', formData.finishQuality);
        form.append('entry.1337831949', formData.startDate);
        form.append('entry.1337831950', formData.comments);
        form.append('entry.1337831951', formData.terms ? 'Sí' : 'No');

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
                postalCode: '',
                reformType: [],
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
                value={formData.postalCode}
                onChange={(val) => handleChange("postalCode", val)}
            />

            <FieldSetInput
                legend={t("forms.renovation.form.reformType")}
                options={["Integral", "Semi Integral", "Solo baños", "Solo cocina", "Solo baños y cocina", "Cambio de uso", "Vivienda turística", "Otro"]}
                optionsChecked={formData.reformType}
                onChange={(val) => toggleArrayValue("reformType", val)}
            />

            <FormInput
                type="number"
                name="bathrooms"
                placeholder={t("forms.renovation.form.bathrooms")}
                value={formData.bathrooms}
                onChange={(val) => handleChange("bathrooms", val)}
            />
            <FormInput
                type="number"
                name="bedrooms"
                placeholder={t("forms.renovation.form.bedrooms")}
                value={formData.bedrooms}
                onChange={(val) => handleChange("bedrooms", val)}
            />

            <FieldSetInput
                type="radio"
                legend={t("forms.renovation.form.floorType")}
                options={["Laminado", "Gres porcelánico", "Otro"]}
                optionsChecked={formData.floorType}
                onChange={(val) => handleChange("floorType", val)}
            />

            <FieldSetInput
                type="radio"
                legend={t("forms.renovation.form.windowChange")}
                options={["Sí", "No"]}
                optionsChecked={formData.windowChange}
                onChange={(val) => handleChange("windowChange", val)}
            />

            <FieldSetInput
                type="radio"
                legend={t("forms.renovation.form.climatization")}
                options={["Conductos", "Split", "No"]}
                optionsChecked={formData.climatization}
                onChange={(val) => handleChange("climatization", val)}
            />

            <FieldSetInput
                type="radio"
                legend={t("forms.renovation.form.heating")}
                options={["Radiadores", "Suelo radiante", "No"]}
                optionsChecked={formData.heating}
                onChange={(val) => handleChange("heating", val)}
            />

            <FormInput
                type="number"
                name="surface"
                placeholder={t("forms.renovation.form.surface")}
                value={formData.surface}
                onChange={(val) => handleChange("surface", val)}
            />

            <FieldSetInput
                type="radio"
                legend={t("forms.renovation.form.finishQuality")}
                options={["Medio", "Medio alto", "Alto"]}
                optionsChecked={formData.finishQuality}
                onChange={(val) => handleChange("finishQuality", val)}
            />

            <FormInput
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
