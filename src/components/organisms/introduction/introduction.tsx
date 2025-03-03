import ImageGetter from "@/assets/ImageGetter";
import { Sections } from "@/enums/global";
import background_image from "@/assets/background/bg_test.png";

const Introduction = () => {
    const sections = [
        { label: "", link: "" },
        { label: "Nosotras", link: Sections.OUR_PASSION },
        { label: "Nuestra Forma", link: Sections.OUR_WAY },
        { label: "Por que elegirnos?", link: Sections.WHY_CHOOSE_US },
        { label: "Testimonios", link: Sections.FOOTER },
        { label: "Contáctenos", link: Sections.CONTACT },
    ]
    return (
        <div className="relative w-full min-h-screen bg-black text-white" id={Sections.INTRODUCTION}>
            {/* full background boxes image */}
            <div className="w-full max-h-screen overflow-hidden absolute top-0 left-0">
                <img
                    src={background_image}
                    className="min-h-screen object-cover"
                />
            </div>

            <div className="hidden xl:grid w-full h-screen xl:px-[93px] grid-cols-6 grid-rows-2 gap-0 z-50">
                {sections.map((item, index) => {
                    const isLast = index === sections.length - 1

                    return (
                        <div
                            key={index}
                            className={`border-[#C8CACC]/50 border-b ${!isLast && "border-r"} p-4 z-50`}
                        >
                            <button className="text-base">{item.label}</button>
                        </div>
                    );
                })}
                {[...Array(6)].map((_, index) => {
                    const isLast = index === sections.length - 1

                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-center font-bold shadow-md border-[#C8CACC]/50 z-50 ${!isLast && "border-r"}`}
                        />
                    )
                })}
            </div>
            <div className="absolute bottom-0 left-28">
                <ImageGetter
                    folder="m2studio"
                    image="light_logo"
                    width={1140}
                    height={276}
                />
            </div>
            <div className="absolute top-1/2 right-28 -translate-y-1/2 text-right text-xl xl:text-2xl font-light w-[486px] tracking-[.35rem]">
                CREAMOS HOGARES, DISEÑAMOS EXPERIENCIAS
            </div>
            <button className="absolute bottom-14 right-28 p-2 bg-white text-black rounded-full flex gap-2 items-center">
                <span className="px-3">
                    whatsapp
                </span>
                <ImageGetter
                    folder="icons"
                    image="whatsapp"
                    width={31}
                    height={31}
                />
            </button>
        </div>
    )
}

export default Introduction;