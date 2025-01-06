import { ReactElement, useRef, useEffect } from "react";
import gsap from "gsap";

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
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                height: isOpen ? "auto" : 0,
                duration: 0.5,
                ease: "power2.inOut",
                overflow: "hidden",
            });
        }

        if (iconRef.current) {
            gsap.to(iconRef.current, {
                rotate: isOpen ? 180 : 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
        }

        return () => {
            gsap.killTweensOf(contentRef.current);
            gsap.killTweensOf(iconRef.current);
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
                <div
                    ref={iconRef}
                    className="w-4 h-4 xl:w-11 xl:h-11 min-w-4 xl:min-w-11 rounded-full border-[#C8CACC] border flex justify-center items-center text-[#C8CACC]"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-minus"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    )}
                </div>
            </button>
            <div ref={contentRef} style={{ overflow: "hidden", height: 0 }}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;