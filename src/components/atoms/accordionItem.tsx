import { ReactElement, useRef, useEffect } from "react";
import gsap from "gsap";
import { PlusToggle } from "./plusToggle";

export interface accordionItemProps {
    id: number;
    title: string;
    children: ReactElement;
}

type props = accordionItemProps & {
    isOpen: boolean;
    onToggle: (id: number) => void;
};

function formatearNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
}

const AccordionItem = ({ id, title, children, isOpen = false, onToggle }: props) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                height: isOpen ? "auto" : 0,
                duration: 0.5,
                ease: "power2.inOut",
                overflow: "hidden",
            });
        }

        return () => {
            gsap.killTweensOf(contentRef.current);
        }
    }, [isOpen]);

    return (
        <div className="w-full p-5 border-t border-b">
            <button
                onClick={() => onToggle(id)}
                className="w-full text-left xl:text-4xl font-extralight flex justify-between items-center"
            >
                <p>
                    <span>{formatearNumero(id)}</span>
                    <span className="px-3">&middot;</span>
                    <span>{title}</span>
                </p>
                <PlusToggle isOpen={isOpen} />
            </button>
            <div ref={contentRef} style={{ overflow: "hidden", height: 0 }}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;