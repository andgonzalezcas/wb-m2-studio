import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

import background_image_right from "@/assets/background/bg_right.png";
import background_image_left from "@/assets/background/bg_left.png";

export default function SplitScreen() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const dividerRef = useRef<HTMLDivElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);

    const moveDivider = useCallback((event: MouseEvent) => {
        if (!containerRef.current || !dividerRef.current || !leftRef.current || !rightRef.current) return;

        const { top, bottom, left: containerLeft, width } = containerRef.current.getBoundingClientRect();

        if (event.clientY < top || event.clientY > bottom) return;

        const xPos = event.clientX - containerLeft;
        const percentage = (xPos / width) * 100;

        dividerRef.current.style.left = `${xPos}px`;
        gsap.to(leftRef.current, { clipPath: `inset(0 ${100 - percentage}% 0 0)`, duration: 0 });
        gsap.to(rightRef.current, { clipPath: `inset(0 0 0 ${percentage}%)`, duration: 0 });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", moveDivider);
        return () => window.removeEventListener("mousemove", moveDivider);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
            <div
                ref={leftRef}
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${background_image_left})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                    clipPath: "inset(0 50% 0 0)",
                }}
            ></div>

            <div
                ref={rightRef}
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${background_image_right})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    clipPath: "inset(0 0 0 50%)",
                }}
            ></div>

            <div
                ref={dividerRef}
                className="absolute top-0 bottom-0 w-[1px] bg-gray-300 cursor-col-resize"
                style={{ left: "50%" }}
            ></div>
        </div>
    );
}
