import ImageGetter from "@/assets/ImageGetter";

const PlusButton = ({ onClick, isDark }: {
    onClick?: () => void,
    isDark?: boolean
}) => {
    return (
        <button
            onClick={onClick}
            className={`font-light hover:rotate-135 w-4 md:w-5 h-4 md:h-5 rounded-full flex justify-center items-center border-0.5 transition-transform duration-300 origin-center text-center ${isDark ? "border-[#232C33]" : "border-white"}`}
        >
            <ImageGetter
                folder="icons"
                image="border"
                width={8}
                height={8}
                color={isDark ? "#232C33" : "white"}
            />
        </button>
    )
}

export default PlusButton;