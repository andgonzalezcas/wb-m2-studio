import ImageGetter from "@/assets/ImageGetter";

const PlusButton = () => {
    return (
        <button className="font-light hover:rotate-135 w-5 h-5 rounded-full flex justify-center items-center border-0.5 transition-transform duration-300 origin-center text-center">
            <ImageGetter
                folder="icons"
                image="border"
                width={7}
                height={7}
                color="#fff"
            />
        </button>
    )
}

export default PlusButton;