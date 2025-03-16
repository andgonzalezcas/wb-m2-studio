import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import { Suspense, useRef, useState, useCallback, MouseEvent } from "react";
import { fragment, vertex } from "@/shaders/bulgeMaterial";
import { ClampToEdgeWrapping } from "three";

function MovingMesh({ mouse, imgSrc }: { mouse: number[]; imgSrc: string }) {
    const meshRef = useRef<any>(null);
    const texture = useTexture(imgSrc);
    texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
    const { width, height } = texture.image;
    const scale = useAspect(width, height, 1);

    const uniforms = useRef({
        uTexture: { value: texture },
        uMouse: { value: [0.5, 0.5] },
    });

    useFrame((_, delta) => {
        if (!meshRef.current) return;
        uniforms.current.uMouse.value[0] += (mouse[0] - uniforms.current.uMouse.value[0]) * delta * 5;
        uniforms.current.uMouse.value[1] += (mouse[1] - uniforms.current.uMouse.value[1]) * delta * 5;
    });

    return (
        <mesh ref={meshRef} scale={scale}>
            <planeGeometry args={[1.1, 1.1, 1, 1]} />
            <shaderMaterial
                fragmentShader={fragment}
                vertexShader={vertex}
                uniforms={uniforms.current}
            />
        </mesh>
    );
};

export default function MovingImage({ imgSrc }: { imgSrc: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState([0.5, 0.5]);

    const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1 - (e.clientY - rect.top) / rect.height;

        setMouse([x, y]);
    }, []);

    const onMouseLeave = useCallback(() => {
        setMouse([0.5, 0.5]);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%"
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <Canvas style={{
                width: "100%",
                height: "100%"
            }}>
                <Suspense fallback={null}>
                    <MovingMesh
                        mouse={mouse}
                        imgSrc={imgSrc}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};