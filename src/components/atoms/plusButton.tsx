const PlusButton = ({ onClick, isDark, isActive }: {
    onClick?: () => void,
    isDark?: boolean,
    isActive?: boolean
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative cursor-pointer p-1 xl:p-2 transition-all duration-1000 hover:-rotate-135
                ${isActive ? "scale-100 rotate-180" : "scale-125 rotate-0"}`}
        >
            {isActive && <div className={`opacity-100 scale-100 h-6 w-6 rounded-full border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ${isDark ? "border-[#232C33]" : "border-white"}`} />}
            <div className="relative h-2 w-2">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4/5 ${isDark ? "bg-[#232C33]" : "bg-white"}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[1px] ${isDark ? "bg-[#232C33]" : "bg-white"}`} />
            </div>
        </button>
    )
}

export default PlusButton;