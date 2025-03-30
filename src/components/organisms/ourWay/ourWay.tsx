import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import MovingImage from "@/components/atoms/movingImage";
import { Sections } from "@/enums/global";
import imageImported from "@/assets/image/our_way/ourWay.png";
import DotWithText from "@/components/atoms/dotWithText";
import ServiceList from "@/components/atoms/serviceList";

const OurWay = () => {
    const [showCommitment, setShowCommitment] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const commitmentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const DURATION = 2.5;

    useEffect(() => {
        if (showCommitment) {
            gsap.fromTo(
                divRef.current,
                { left: 'calc(66.67% - 170px)' },
                { left: 'calc(66.67%)', duration: DURATION },
            );
            gsap.fromTo(
                commitmentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: DURATION },
            );
            gsap.to(imageRef.current, { opacity: 0, y: -20, duration: DURATION });
        } else {
            gsap.fromTo(
                divRef.current,
                { left: 'calc(66.67%)' },
                { left: 'calc(66.67% - 170px)', duration: DURATION },
            );
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: DURATION }
            );
            gsap.to(commitmentRef.current, { opacity: 0, y: 20, duration: DURATION });
        }

        return () => {
            gsap.killTweensOf(divRef.current);
            gsap.killTweensOf(commitmentRef.current);
            gsap.killTweensOf(imageRef.current);
        }
    }, [showCommitment]);

    return (
        <div
            ref={sectionRef}
            id={Sections.OUR_WAY}
            className="w-full min-h-screen bg-white xl:px-[93px] flex flex-col xl:flex-row"
        >
            <div
                ref={divRef}
                className="hidden xl:block relative border-r border-[#C8CACC] min-h-screen h-full"
                style={{
                    left: showCommitment ? 'calc(66.67%)' : 'calc(66.67% - 170px)',
                    height: sectionRef.current ? sectionRef.current.offsetHeight : 0
                }}
            />
            <div className="w-full xl:w-2/3">
                {/* Image step */}
                <div ref={imageRef} className={`w-full flex flex-col items-end py-10 xl:py-16 ${showCommitment ? "hidden" : ""}`}>
                    <div className="p-10">
                        <DotWithText>
                            <p className="text-left text-5xl font-extralight">
                                02
                            </p>
                        </DotWithText>
                    </div>
                    <div className="w-full max-h-[529px] h-screen">
                        <MovingImage imgSrc={imageImported} />
                    </div>
                    <div className="p-10">
                        <DotWithText>
                            <ServiceList />
                        </DotWithText>
                    </div>
                </div>

                {/* Commitment step */}
                <div
                    ref={commitmentRef}
                    className={`w-full text-justify p-10 xl:p-16 text-[#3D3D3D] text-sm/6 xl:text-lg/6 flex flex-col gap-8 h-full justify-center cursor-pointer ${showCommitment ? "" : "hidden"}`}
                >
                    <p>
                        <b>M2.Studio</b> desarrolla sus actividades dentro de <b>estándares de excelencia</b>, en lo que al <b>cuidado del medio ambiente</b> se refiere. Por consiguiente, cada persona que se encuentre dentro de la propiedad del cliente, o fuera de esta, pero en su representación, sin excepción, deberán cumplir con sus responsabilidades dentro del marco del <b>compromiso ecológico</b> de acuerdo con la normativa legal vigente, previniendo la contaminación ambiental en todos los proyectos en donde ejecute sus actividades.
                    </p>
                    <p>
                        Para lo cual asume los siguientes compromisos:
                    </p>
                    <ul className="list-decimal pl-6">
                        <li>Continuar activamente con una política de prevención de la contaminación, para minimizar el impacto de nuestras operaciones.</li>
                        <li>Cumplir con las políticas y procedimientos del cliente, así como con todas las leyes y regulaciones aplicables.</li>
                        <li>Realizar esfuerzos estratégicos, para maximizar nuestra eficiencia energética y el uso de recursos naturales, mediante la gestión de nuestro uso de energía, consumo de agua y generación de residuos.</li>
                        <li>Gestionar responsablemente los sitios de nuestras operaciones, para proteger los ecosistemas y la biodiversidad, así como para maximizar nuestra contribución a la conservación de la naturaleza.</li>
                        <li>Mantener canales de comunicación abiertos y efectivos con nuestros empleados, clientes, comunidad y todos aquellos que trabajen con nosotros.</li>
                        <li>Proveer los recursos necesarios para la instrucción, capacitación y supervisión, con el fin de gestionar apropiadamente los aspectos ambientales de nuestras operaciones.</li>
                        <li>Planear, revisar y evaluar nuestro desempeño ambiental frente a objetivos medibles, para impulsar la mejora continua.</li>
                    </ul>
                    <p>
                        <b>M2.Studio</b> establecerá y mantendrá un programa y/o plan de manejo ambiental que contemple objetivos y procedimientos para realizar las operaciones en todos sus proyectos e instalaciones promoviendo la conciencia ambiental.
                    </p>
                </div>
            </div>

            {/* static text */}
            <div className="w-full xl:w-1/3 text-left p-10 xl:p-16 xl:h-screen flex flex-col justify-center">
                <p className="font-normal text-base">studio</p>
                <p className="max-w-[286px] text-2xl xl:text-3xl font-thin">
                    M2 ha nacido como resultado de la pasión que sentimos por todo aquello que sea novedoso, <u onClick={() => setShowCommitment((prev) => !prev)} className="decoration-1 cursor-pointer">sostenible</u> y bello.
                </p>
            </div>
        </div>
    );
};

export default OurWay;
