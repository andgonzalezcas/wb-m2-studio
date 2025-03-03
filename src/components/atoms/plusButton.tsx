import ImageGetter from "@/assets/ImageGetter";

const PlusButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="font-light hover:rotate-135 w-5 h-5 rounded-full flex justify-center items-center border-0.5 transition-transform duration-300 origin-center text-center"
        >
            <ImageGetter
                folder="icons"
                image="border"
                width={8}
                height={8}
                color="#C8CACC"
            />
        </button>
    )
}

export default PlusButton;