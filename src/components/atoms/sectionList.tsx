
interface item {
    title?: string;
    text: string;
}

interface props {
    label?: string;
    list: item[];
}
const SectionList = ({ label, list }: props) => {
    return (
        <div className="w-full bg-white text-left pt-11">
            {label && <p className="text-sm xl:text-base">{label}</p>}
            <ul className="flex flex-col gap-3">
                {list.map((item, index) => (
                    <li key={index} className="xl:text-xl font-light flex items-start space-x-2">
                        <div className="w-1.5 min-w-1.5 h-1.5 bg-[#FFD4BA] rounded-full mr-2 mt-3"></div>
                        <p>
                            {item.title && <span className="font-normal">{item.title}</span>}
                            {item.title && <span className="font-light">{" - "}</span>}
                            <span>{item.text}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SectionList;