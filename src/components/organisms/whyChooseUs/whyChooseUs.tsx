import ImageGetter from "@/assets/ImageGetter";
import DotWithText from "@/components/atoms/dotWithText";

import refactor from "@/assets/image/why_choose_us_section/refactor.png";
import design from "@/assets/image/why_choose_us_section/design.png";
import { Sections } from "@/enums/global";
import BulgeImage from "@/components/atoms/bulgeImage";

const WhyChooseUs = () => {
    return (
        <div id={Sections.WHY_CHOOSE_US} className="w-full min-h-screen bg-white xl:px-[93px] border-t border-b">
            <div className="flex flex-row-reverse xl:flex-row">
                <div className="w-1/3 xl:w-1/2 xl:border-r p-10 xl:p-16 flex justify-end items-end xl:items-start">
                    <DotWithText>
                        <p className="text-left text-5xl font-extralight">
                            03
                        </p>
                    </DotWithText>
                </div>
                <div className="w-2/3 xl:w-1/2 p-10 xl:p-16">
                    <ImageGetter
                        classname="xl:mt-10 ml-2"
                        folder="m2studio"
                        image="dark_logo"
                        width={145}
                        color="#000"
                    />
                    <h3 className="text-left text-4xl xl:text-8xl font-thin xl:mb-16">Por qué <br />elegirnos?</h3>
                    <div className="hidden xl:block">
                        <DotWithText>
                            <p className="text-left text-xs">
                                Diseño <br />
                                Interiorismo <br />
                                Reformas
                            </p>
                        </DotWithText>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row border-">
                <section className="text-left xl:text-right w-full xl:w-1/2 p-10 xl:p-16 xl:text-lg font-light flex flex-col gap-3 xl:border-r">
                    <p>Diseñamos y Reformamos</p>
                    <p>Contamos con los mejores profesionales en el sector del diseño y de la reforma.</p>
                    <p>Profesionales certificados Todo nuestro equipo está certificado y cuenta con una gran experiencia, cada uno en su especialidad.</p>
                    <p>Plazos Garantizados Nos comprometemos a cumplir mediante contrato con los plazos establecidos ya que no dependemos terceros ni intermediarios.</p>
                    <p>Calidad Precio Ofrecemos una relación calidad precio muy competitivo. Siempre buscando un equilibrio entre el diseño, la calidad y el precio.</p>
                    <p>Garantía Post Obra Ofrecemos a todos nuestros clientes para su tranquilidad y la nuestra, una garantía de 2 años tras la finalización de obra para cubrir así cualquier defecto de fábrica que pueda surgir.</p>
                </section>

                <div className="object-cover w-full xl:w-1/2 xl:border-l  h-screen max-h-[554px]">
                    <BulgeImage imgSrc={refactor} />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 h-full border-r">
                    <div className="object-cover w-full h-screen max-h-[554px]">
                        <BulgeImage imgSrc={design} />
                    </div>
                </div>

                <div className="w-full xl:w-1/2 p-10 xl:p-16 flex flex-col justify-between text-left gap-5">
                    <h4 className="font-extralight text-2xl xl:text-6xl">Proyecto y Diseño Incluido</h4>
                    <section className="text-left xl:text-left xl:text-lg font-light flex flex-col gap-3">
                        <p>Realizamos tu proyecto sin costes adicionales teniendo en cuenta tus gustos y necesidades, siempre optimizando la funcionalidad de espacios y últimas tendencias para que puedas visualizar tu sueño.</p>
                        <p><b>Prestamos especial atención a:</b></p>
                        <p>Optimizar el funcionamiento de cada espacio</p>
                        <p>Mejorar la iluminación y el almacenamiento ya que consideramos estos puntos fundamentales para mejorar tu calidad de vida.</p>
                    </section>
                </div>
            </div>

            <div className="w-1/2 border-r p-16 xl:pb-60 hidden xl:block">
                <DotWithText>
                    <p className="text-left text-xs">
                        Diseño <br />
                        Interiorismo <br />
                        Reformas
                    </p>
                </DotWithText>
            </div>
        </div>
    )
}

export default WhyChooseUs;