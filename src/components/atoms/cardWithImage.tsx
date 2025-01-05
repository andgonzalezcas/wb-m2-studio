interface props {
    image: string;
    label: string;
    description: string;
}

const CardWithImage = ({ image, label, description }: props) => {
    return (
        <div className="flex flex-col items-center max-w-[466px] gap-4">
            <img
                src={image}
                alt={`imagen de la carta ${label}`}
                className="w-full h-auto object-cover text-gray-600"
            />
            <h4 className="font-extralight text-2xl xl:text-4xl w-full text-left">{label}</h4>
            <p className="font-light xl:text-xl leading-5 w-full text-left">{description}</p>
        </div>
    );
}

export default CardWithImage;