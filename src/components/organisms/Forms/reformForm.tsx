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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("Formulario enviado (simulado).");
    };

    return (
        <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="name"
                placeholder="Nombre"
                required
                value={formData.name}
                onChange={(val) => handleChange("name", val)}
            />
            <FormInput
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
            />
            <FormInput
                type="tel"
                name="phone"
                placeholder="Telefono"
                required
                value={formData.phone}
                onChange={(val) => handleChange("phone", val)}
            />
            <FormInput
                type="text"
                name="postalCode"
                placeholder="Código postal"
                value={formData.postalCode}
                onChange={(val) => handleChange("postalCode", val)}
                required
            />

            <FieldSetInput
                legend="Tipo de Reforma"
                options={["Integral", "Semi Integral", "Solo baños", "Solo cocina", "Solo baños y cocina", "Cambio de uso", "Vivienda turística", "Otro"]}
                optionsChecked={formData.reformType}
                onChange={(val) => toggleArrayValue("reformType", val)}
            />

            <FormInput
                type="number"
                name="bathrooms"
                placeholder="Nº Baños"
                value={formData.bathrooms}
                onChange={(val) => handleChange("bathrooms", val)}
                required
            />
            <FormInput
                type="number"
                name="bedrooms"
                placeholder="Nº Dormitorios"
                value={formData.bedrooms}
                onChange={(val) => handleChange("bedrooms", val)}
                required
            />

            <FieldSetInput
                type="radio"
                legend="Tipo de suelo"
                options={["Laminado", "Gres porcelánico", "Otro"]}
                optionsChecked={formData.floorType}
                onChange={(val) => handleChange("floorType", val)}
            />

            <FieldSetInput
                type="radio"
                legend="Cambio de ventanas"
                options={["Sí", "No"]}
                optionsChecked={formData.windowChange}
                onChange={(val) => handleChange("windowChange", val)}
            />

            <FieldSetInput
                type="radio"
                legend="Climatización"
                options={["Conductos", "Split", "No"]}
                optionsChecked={formData.climatization}
                onChange={(val) => handleChange("climatization", val)}
            />

            <FieldSetInput
                type="radio"
                legend="Tipo de calefacción"
                options={["Radiadores", "Suelo radiante", "No"]}
                optionsChecked={formData.heating}
                onChange={(val) => handleChange("heating", val)}
            />

            <FormInput
                type="number"
                name="surface"
                placeholder="Superficie m2"
                value={formData.surface}
                onChange={(val) => handleChange("surface", val)}
                required
            />

            <FieldSetInput
                type="radio"
                legend="Calidad acabados"
                options={["Medio", "Medio alto", "Alto"]}
                optionsChecked={formData.finishQuality}
                onChange={(val) => handleChange("finishQuality", val)}
            />

            <FormInput
                type="date"
                name="startDate"
                placeholder="Fecha comienzo de obra"
                value={formData.startDate}
                onChange={(val) => handleChange("startDate", val)}
                required
            />

            <textarea
                name="comment"
                placeholder={t("contact.messagePlaceholder")}
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
                He leído y acepto los términos y condiciones de uso
            </label>

            <button type="submit" className="py-1 px-4 border rounded-full self-start">
                Enviar
            </button>
        </form>
    );
};

export default ReformForm;
