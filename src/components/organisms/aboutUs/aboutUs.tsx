import ImageGetter from "@/assets/ImageGetter";
import DotWithText from "@/components/atoms/dotWithText";

import background_image from "@/assets/background/WEB02.png";
import ProfileCard from "@/components/atoms/profileCard";

const AboutUs = () => {
    return (
        <div className="w-full min-h-screen bg-[#232C33] text-white">
            {/* un poco sobre nosotras section */}
            <div className="flex w-full px-24">
                <div className="w-1/3 p-10 relative border-r">
                    <DotWithText>
                        <p className="text-left text-xs">
                            Diseño <br />
                            Interiorismo <br />
                            Reformas
                        </p>
                    </DotWithText>
                    <ImageGetter
                        classname="absolute bottom-4 right-4"
                        folder="icons"
                        image="border"
                        width={20}
                        height={20}
                        color="#fff"
                    />
                </div>
                <div className="w-1/3 p-10 pb-28">
                    <p className="text-right font-light">Somos una empresa joven de nueva creación pero con una amplia experiencia en el diseño y la reforma de todo tipo de espacios. Trabajamos directamente con nuestro propio equipo de profesionales de confianza, lo que garantiza siempre la máxima calidad de entrega en cuanto a acabados y plazos. Nuestros presupuestos son muy competitivos, acorde al mercado actual.</p>
                </div>
                <div className="w-1/3 p-10 relative border-l">
                    <div className="flex w-full justify-between">
                        <h3 className="text-left text-6xl font-extralight">
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
                        classname="absolute bottom-4 right-4"
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
                    className=""
                />
            </div>

            {/* Nuestro equipo section */}
            <div className="h-screen w-full flex items-center bg-white text-black px-24 border-b">
                <div className="w-full flex p-10">
                    <h3 className="w-1/3 font-extralight text-6xl text-left">
                        Nuestro <br />
                        equipo <br />
                        directivo
                    </h3>
                    <div className="w-2/3 flex gap-2 justify-between">
                        <ProfileCard
                            image="src/assets/image/profile_base_image.png"
                            name="Amanda Herbert"
                            job="Interiorista"
                            phone="+34 696 94 17 75"
                            email="amanda@m2studio.es"
                            align="left"
                        />
                        <ProfileCard
                            image="src/assets/image/profile_base_image.png"
                            name="Amanda Herbert"
                            job="Interiorista"
                            phone="+34 696 94 17 75"
                            email="amanda@m2studio.es"
                            align="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;