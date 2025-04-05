import { useRef, useCallback, useState, useEffect } from "react";

export default function MovingImage({ imgSrc }: { imgSrc: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
    const [isLoaded, setIsLoaded] = useState(false);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMouse({ x, y });
    }, []);

    const onMouseLeave = useCallback(() => {
        setMouse({ x: 0.5, y: 0.5 });
    }, []);

    useEffect(() => {
        if (!imageRef.current || !isLoaded) return;

        const moveX = (mouse.x - 0.5) * 20;
        const moveY = (mouse.y - 0.5) * 20;
        
        imageRef.current.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
    }, [mouse, isLoaded]);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative" as const
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <img
                ref={imageRef}
                src={imgSrc}
                alt=""
                onLoad={() => setIsLoaded(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.1s ease-out"
                }}
            />
        </div>
    );
}