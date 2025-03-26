interface props {
    onClick: () => void;
    rotated?: boolean;
}

const OvalButton = ({ onClick, rotated }: props) => {
    return (
        <button
            onClick={onClick}
            className={`relative cursor-pointer p-1 xl:p-2`}
        >
            <div className={`opacity-100 scale-100 h-7 w-10 rounded-full border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 border-white`} />
            <div className={`relative h-4 w-4 ${rotated && "rotate-45"}`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4/5 bg-white`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[1px] bg-white`} />
            </div>
        </button>
    );
}

export default OvalButton;