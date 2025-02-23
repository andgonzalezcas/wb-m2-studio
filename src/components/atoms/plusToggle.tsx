import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PlusToggle({ isOpen }: { isOpen: boolean }) {
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                rotate: isOpen ? 180 : 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
        }

        return () => {
            gsap.killTweensOf(iconRef.current);
        }
    }, [isOpen]);

    return (
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
    )
}