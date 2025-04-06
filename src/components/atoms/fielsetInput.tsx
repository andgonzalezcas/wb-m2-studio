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
    return (
        <fieldset className="border p-2 w-[80%] text-left relative">
            <legend className="absolute top-2 text-2xl font-light bg-white text-[#9CA3AF]">
                {legend}
            </legend>
            <div className="mt-10">
                {options.map(option => (
                    <label key={option} className="block text-sm font-light">
                        <input
                            type={type}
                            checked={typeof optionsChecked === "string" ? optionsChecked === option : optionsChecked.includes(option)}
                            onChange={() => onChange(option)}
                        />
                        {" "}{option}
                    </label>
                ))}
            </div>
        </fieldset>
    );
};

export default FieldSetInput;