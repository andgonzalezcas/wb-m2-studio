const TabFormButton = ({ label, border, color = "black", onClick }: {
    label: string;
    border?: boolean;
    color?: string;
    onClick: () => void;
}) => {
    return (
        <button onClick={onClick} className={`${border && "border-b"} max-w-56 flex gap-2`}>
            <span className="text-base xl:text-lg text-left mb-3 font-light">{label}</span>
            <div className="pt-2.5 min-w-4">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.20276 1.39153H8.43472L0.390625 9.26414L1.35925 10.2591L9.261 2.52911V7.56995H10.6497V0H3.20276V1.39153Z" fill={color} />
                </svg>
            </div>
        </button>
    )
};

export default TabFormButton;