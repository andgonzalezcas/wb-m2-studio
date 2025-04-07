import { useLanguage } from "@/hooks/useLanguage";

interface props {
    legend: string,
    options: string[],
    optionsChecked: string[] | string,
    onChange: (value: string) => void,
    type?: "checkbox" | "radio"
}

const FieldSetInput = ({
    legend,
    options,
    optionsChecked,
    onChange,
    type = "checkbox"
}: props) => {
    const { t } = useLanguage();

    return (
        <fieldset className="border p-2 w-full xl:w-[80%] text-left relative">
            <legend className="absolute top-2 text-2xl font-light bg-white text-[#9CA3AF]">
                {legend}
            </legend>
            <div className="mt-10">
                {options.map(option => (
                    <div key={option} className=" text-sm font-light flex">
                        <input
                            type={type}
                            checked={typeof optionsChecked === "string" ? optionsChecked === option : optionsChecked.includes(option)}
                            onChange={() => onChange(option)}
                            className="mr-2"
                        />
                        {" "}{option}
                        {option.toLocaleLowerCase() === t("general.others").toLocaleLowerCase() && (
                            <div>
                                : <input className="border-b" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default FieldSetInput;