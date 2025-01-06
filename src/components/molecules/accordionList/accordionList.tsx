import AccordionItem, { accordionItemProps } from "@/components/atoms/accordionItem";
import { useState } from "react";

interface props {
    list: accordionItemProps[];
}

const AccordionList = ({ list }: props) => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenItemId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full">
            {list.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        isOpen={openItemId === item.id}
                        onToggle={handleToggle}
                    >
                        {item.children}
                    </AccordionItem>
                )
            })}
        </div>
    )
}

export default AccordionList;