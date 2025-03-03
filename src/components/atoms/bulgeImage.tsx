import { gsap } from "gsap";
import { useFrame, Canvas } from "@react-three/fiber";
import { useAspect, useTexture } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from "react";
import { fragment, vertex } from "@/shaders/bulgeMaterial";

function Mesh({ mouse, imgSrc }: { mouse: number[], imgSrc: string }) {
    const meshRef = useRef<any>(null);
    const texture = useTexture(imgSrc);
    const { width, height } = texture.image;
    const lerpedMouse = useRef([0.5, 0.5]);

    const scale = useAspect(
        width,
        height,
        1
    );

    const uniforms = useRef({
        uTime: { value: 0 },
        uTexture: { value: texture },
        uMouse: { value: [0.5, 0.5] },
        uRadius: { value: 0.95 },
        uStrength: { value: 1.1 },
        uBulge: { value: .4 },
    });

    useFrame(() => {
        if (!meshRef.current) return;

        const speed = 0.07;
        lerpedMouse.current[0] += (mouse[0] - lerpedMouse.current[0]) * speed;
        lerpedMouse.current[1] += (mouse[1] - lerpedMouse.current[1]) * speed;

        meshRef.current.material.uniforms.uTime.value += 0.04;
        meshRef.current.material.uniforms.uMouse.value = lerpedMouse.current;
    });

    return (
        <mesh ref={meshRef} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            <shaderMaterial
                wireframe={false}
                fragmentShader={fragment}
                vertexShader={vertex}
                uniforms={uniforms.current}
            />
        </mesh>
    )
}

export default function BulgeImage({ imgSrc }: { imgSrc: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouse, setMouse] = useState([0.5, 0.5]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(canvasRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        const onMouseMove = (e: MouseEvent) => {
            if (!canvasRef.current) return;

            const rect = canvasRef.current.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width;
            const y = 1 - (e.clientY - rect.top) / rect.height;

            if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
                setMouse([x, y]);
            } else {
                setMouse([0.5, 0.5]);
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        const targetOpacity = isVisible ? 0 : 1;
        animateCanvas(targetOpacity);
    }, [isVisible]);

    const animateCanvas = (opacity: number) => {
        gsap.killTweensOf(canvasRef.current);

        gsap.fromTo(
            canvasRef.current,
            { opacity: opacity },
            {
                opacity: opacity === 0 ? 1 : 0,
                duration: 1,
                ease: "power3.out"
            }
        );
    };

    return (
        <Canvas ref={canvasRef} style={{
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }}>
            <ambientLight />
            <Suspense fallback={null}>
                <Mesh mouse={mouse} imgSrc={imgSrc} />
            </Suspense>
        </Canvas>
    );
}