import ImageGetter from "@/assets/ImageGetter";
import DotWithText from "@/components/atoms/dotWithText";

import background_image from "@/assets/background/WEB02.png";
import ProfileCard from "@/components/atoms/profileCard";
import { Sections } from "@/enums/global";

import amanda_image from "src/assets/image/about_us/amanda.png";
import melissa_image from "src/assets/image/about_us/melissa.png";

const AboutUs = () => {
    return (
        <div className="w-full min-h-screen bg-[#232C33] text-white" id={Sections.ABOUT_US}>
            {/* un poco sobre nosotras section */}
            <div className="flex flex-col xl:flex-row w-full xl:px-[93px]">
                {/* Primer div */}
                <div className="w-full xl:w-1/3 p-10 relative border-[#C8CACC]/20 xl:border-r order-1 mb-10 xl:mb-0">
                    <DotWithText>
                        <p className="text-left text-xs">
                            Diseño <br />
                            Interiorismo <br />
                            Reformas
                        </p>
                    </DotWithText>
                    <ImageGetter
                        classname="absolute bottom-4 right-4 hidden xl:block"
                        folder="icons"
                        image="border"
                        width={20}
                        height={20}
                        color="#fff"
                    />
                </div>

                <div className="w-full xl:w-1/3 p-10 pb-40 order-3 xl:order-2 border-[#C8CACC]/20 border-t xl:border-t-0">
                    <p className="text-right font-light">
                        Somos una empresa joven de nueva creación pero con una amplia experiencia en el diseño y la reforma de todo tipo de espacios. Trabajamos directamente con nuestro propio equipo de profesionales de confianza, lo que garantiza siempre la máxima calidad de entrega en cuanto a acabados y plazos. Nuestros presupuestos son muy competitivos, acorde al mercado actual.
                    </p>
                </div>

                <div className="w-full xl:w-1/3 p-10 relative border-[#C8CACC]/20 xl:border-l order-2 xl:order-3">
                    <div className="flex w-full justify-between flex-col-reverse xl:flex-row items-end xl:items-start gap-10 xl:gap-0">
                        <h3 className="text-left text-4xl xl:text-5xl font-extralight">
                            un poco<br />
                            sobre<br />
                            nosotras
                        </h3>
                        <DotWithText>
                            <p className="text-left text-5xl font-extralight">
                                01
                            </p>
                        </DotWithText>
                    </div>

                    <ImageGetter
                        classname="absolute bottom-4 right-4 hidden xl:block"
                        folder="icons"
                        image="border"
                        width={20}
                        height={20}
                        color="#fff"
                    />
                </div>
            </div>

            {/* full background boxes image */}
            <div className="w-full">
                <img
                    src={background_image}
                    className="min-h-screen object-cover"
                />
            </div>

            {/* Nuestro equipo section */}
            <div className="min-h-screen w-full flex items-center bg-white text-black xl:px-24 border-b">
                <div className="w-full flex flex-col xl:flex-row p-10 gap-4">
                    <h3 className="w-full xl:w-1/2 font-extralight text-4xl xl:text-6xl text-left">
                        Nuestro <br />
                        equipo <br />
                        directivo
                    </h3>
                    <div className="w-full xl:w-2/3 flex flex-col xl:flex-row gap-2 justify-between">
                        <ProfileCard
                            image={amanda_image}
                            name="Amanda Herbert"
                            job="Interiorista"
                            phone="+34 696 94 17 75"
                            email="amanda@m2studio.es"
                            align="left"
                        />
                        <ProfileCard
                            image={melissa_image}
                            name="Melissa Torres"
                            job="Arquitecta Técnica"
                            phone="+34 611 51 77 37"
                            email="melissa@m2studio.es"
                            align="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;