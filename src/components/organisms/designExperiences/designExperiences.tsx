import DotWithText from "@/components/atoms/dotWithText";

import image from "@/assets/image/design_experiences/team.png";
import { Sections } from "@/enums/global";

const DesignExperiences = () => {
    return (
        <div className="w-full bg-white xl:px-[93px] relative border-t" id={Sections.DESIGN_EXPERIENCES}>
            <div className="flex flex-col-reverse xl:flex-row">
                <div className="w-full xl:w-2/3 xl:pt-28 xl:border-r pb-10">
                    <h3 className="text-right text-4xl xl:text-7xl font-thin px-10">Creando Alianzas,<br /> Diseñando Experiencias</h3>
                </div>
                <div className="w-full xl:w-1/3 p-10 flex justify-end">
                    <DotWithText>
                        <p className="text-left text-5xl font-extralight">
                            05
                        </p>
                    </DotWithText>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row">
                <img
                    src={image}
                    alt={`equipo de trabajo`}
                    className="w-full xl:w-2/3 h-auto object-cover text-gray-600"
                />
                {/* 
                <div className="w-full xl:w-2/3 h-screen max-h-[207px] xl:max-h-[572px] object-cover text-gray-600">
                    <MovingImage imgSrc={image} />
                </div>
                 */}
                <div className="w-full xl:w-1/3 flex flex-col justify-between px-10 border-l pt-4 xl:pt-0">
                    <div className="flex flex-col gap-10">
                        <div className="hidden xl:block">
                            <DotWithText>
                                <p className="text-left text-xs">
                                    Diseño <br />
                                    Interiorismo <br />
                                    Reformas
                                </p>
                            </DotWithText>
                        </div>
                        <p className="text-left font-light text- xl:text-xl">Colaboramos con varias inmobiliarias en Alicante y les proporcionamos nuestros servicios</p>
                    </div>
                    <p className="text-left font-thin text-2xl xl:text-5xl max-w-[440px] pt-5 xl:pt-0 mb-8">Contacta con nosotros y te informaremos</p>
                </div>
            </div>
        </div>
    )
}

export default DesignExperiences;