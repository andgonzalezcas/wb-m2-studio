import ImageGetter from "@/assets/ImageGetter";
import LinkButton from "@/components/atoms/linkButton";
import { Sections } from "@/enums/global";
import { HTMLInputTypeAttribute } from "react";

const FormInput = (props: {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    required: boolean
}) => {
    const { type, placeholder, required } = props;

    return < input
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%]"
    />
}

const ContactForm = () => {
    return (
        <div className="w-full bg-white xl:px-[93px] relative xl:border-t flex flex-col xl:flex-wrap mb-40 pt-20" id={Sections.CONTACT}>
            <div className="w-full xl:w-1/2 p-10 flex flex-col gap-16 xl:hidden py-32">
                <LinkButton
                    label="Formulario si quieres hacer una reforma"
                    link="https://docs.google.com/forms/d/e/1FAIpQLSfLcXSx5AaZmnadgiXqSa7khF8MPY_twQFxvrFRSINb2Gcm4Q/viewform?fbclid=PAY2xjawHpPDdleHRuA2FlbQIxMAABprhOgcBh-RTfaD0_vUsKlInFQgsGVmd2jJ0AdH0PBvLQYHrHbJelQzz3Kg_aem_bnD7s9MjQgIGqrI36_vBgQ"
                    border
                />
                <LinkButton
                    label="Formulario para profesionales colaboradores"
                    link="https://docs.google.com/forms/d/e/1FAIpQLSc9YSzgaY-ZI7l4NMwmUQEM7D4yhbQAG_B3uQfRP-3DNXzhlA/viewform?fbclid=PAY2xjawHpPEVleHRuA2FlbQIxMAABpq7kqUcThqG-LM7HZfiXiNr0BS_l6KaJN22kfMqCXl6vulheAqoy5K0lPA_aem_wyxwVmto7jhnKlVkfjicPQ"
                    border
                />
            </div>
            <div className="w-full px-10 xl:p-10 xl:px-16">
                <ImageGetter
                    folder="m2studio"
                    image="dark_logo"
                    width={145}
                    classname="pl-2"
                />
                <h3 className="text-left text-4xl xl:text-8xl font-thin">Contacto</h3>
            </div>
            <div className="flex flex-row xl:px-6">
                <form className="w-full xl:w-1/2 flex flex-col gap-4 p-10">
                    <FormInput
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                    <FormInput
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <FormInput
                        type="tel"
                        placeholder="Telefono"
                        required
                    />
                    <textarea
                        placeholder="Mensaje"
                        className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%] h-60"
                    />
                    <div className="w-full xl:w-[80%] text-left flex gap-2 px-2">
                        <input type="checkbox" required />
                        <label className="font-extralight">He leído y acepto los términos y condiciones de uso</label>
                    </div>
                    <div className="w-full xl:w-[80%] flex justify-center">
                        <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full w-fit">
                            Enviar
                        </button>
                    </div>
                </form>
                <div className="w-1/2 p-10 flex-col gap-16 hidden xl:flex">
                    <LinkButton
                        label="Formulario si quieres hacer una reforma"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSfLcXSx5AaZmnadgiXqSa7khF8MPY_twQFxvrFRSINb2Gcm4Q/viewform?fbclid=PAY2xjawHpPDdleHRuA2FlbQIxMAABprhOgcBh-RTfaD0_vUsKlInFQgsGVmd2jJ0AdH0PBvLQYHrHbJelQzz3Kg_aem_bnD7s9MjQgIGqrI36_vBgQ"
                        border
                    />
                    <LinkButton
                        label="Formulario para profesionales colaboradores"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSc9YSzgaY-ZI7l4NMwmUQEM7D4yhbQAG_B3uQfRP-3DNXzhlA/viewform?fbclid=PAY2xjawHpPEVleHRuA2FlbQIxMAABpq7kqUcThqG-LM7HZfiXiNr0BS_l6KaJN22kfMqCXl6vulheAqoy5K0lPA_aem_wyxwVmto7jhnKlVkfjicPQ"
                        border
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactForm;