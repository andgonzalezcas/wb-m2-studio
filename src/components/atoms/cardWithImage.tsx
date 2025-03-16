import MovingImage from "./movingImage";

interface props {
    image: string;
    label: string;
    description: string;
    className?: string
}

const CardWithImage = ({ image, label, description, className }: props) => {
    return (
        <div className="flex flex-col items-center max-w-[100vw] md:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[466px] gap-4">
            <div className={`w-full object-cover text-gray-600 h-[350px] lg:h-[405px] xl:h-[540px] ${className}`}>
                <MovingImage imgSrc={image} />
            </div>
            <h4 className="font-extralight text-2xl xl:text-4xl w-full text-left">{label}</h4>
            <p className="font-light xl:text-lg leading-5 w-full text-left">{description}</p>
        </div>
    );
}

export default CardWithImage;