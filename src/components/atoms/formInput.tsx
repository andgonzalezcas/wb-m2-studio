import { HTMLInputTypeAttribute } from "react";

const FormInput = (props: {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    onChange: (value: string) => void,
    value: string
    required?: boolean,
}) => {
    const { type, placeholder, required, name, onChange, value } = props;

    return < input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="border-[#DCDDDF] border text-2xl font-light px-2 py-1 w-full xl:w-[80%]"
    />
}

export default FormInput;