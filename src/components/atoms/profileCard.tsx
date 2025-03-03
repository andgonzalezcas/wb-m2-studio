interface props {
    image: string;
    align: "right" | "left";
    name: string;
    job: string;
    phone: string;
    email: string;
}

const ProfileCard = ({
    image,
    name,
    job,
    phone,
    email,
    align
}: props) => {
    return (
        <div className={`w-full xl:w-1/2 text-base xl:text-2xl font-light text-left ${align === "right" && "xl:text-right"}`}>
            <div>

            </div>
            <div className="max-w-full w-[800px] h-[361px] mb-7">
                <img src={image} alt={name + " profile"} />
            </div>
            <div className="child:leading-none">
                <p className="mt-2">{name}</p>
                <p>{job}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full">
                about me
            </button>
        </div>
    )
}

export default ProfileCard;