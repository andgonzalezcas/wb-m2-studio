import ImageGetter from "@/assets/ImageGetter";
import { Sections } from "@/enums/global";
import background_image from "@/assets/background/bg_right.png";
import { handleNavigation } from "@/utils/common";
import SplitScreen from "@/components/atoms/splitScreen";
import { useLanguage } from "@/hooks/useLanguage";
import { handleWhatsAppClick } from "@/utils/whatsapp";

const Introduction = () => {
    const { t } = useLanguage();

    const sections = [
        { label: "", link: Sections.INTRODUCTION },
        { label: t('sections.ourTeam'), link: Sections.OUR_TEAM },
        { label: t('sections.ourWay'), link: Sections.OUR_WAY },
        { label: t('sections.whyChooseUs'), link: Sections.WHY_CHOOSE_US },
        { label: t('sections.recentProjects'), link: Sections.RECENT_PROJECTS },
        { label: t('sections.contact'), link: Sections.CONTACT },
    ];

    return (
        <div className="relative w-full min-h-screen bg-black text-white" id={Sections.INTRODUCTION}>
            {/* full background boxes image */}
            <div className="block xl:hidden w-full max-h-screen overflow-hidden absolute top-0 left-0">
                <img
                    src={background_image}
                    className="min-h-screen object-cover"
                    alt="background_image"
                />
            </div>

            <div className="w-full h-screen absolute inset-0 hidden xl:block">
                <SplitScreen />
            </div>

            <div className="hidden xl:grid w-full h-screen xl:px-[93px] grid-cols-6 grid-rows-2 gap-0 z-50">
                {sections.map((item, index) => {
                    const isLast = index === sections.length - 1

                    return (
                        <div
                            key={index}
                            className={`border-[#C8CACC]/50 border-b ${!isLast && "border-r"} px-4 py-8 z-50`}
                        >
                            <button className="text-base" onClick={() => handleNavigation(item.link)}>{item.label}</button>
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
            <div className="hidden xl:block absolute bottom-0 left-28">
                <ImageGetter
                    folder="m2studio"
                    image="light_logo"
                    width={1140}
                    height={276}
                />
            </div>

            <div className="flex justify-center xl:hidden absolute w-full top-1/2 -translate-y-1/2">
                <ImageGetter
                    folder="m2studio"
                    image="light_logo"
                    width={350}
                    height={90}
                />
            </div>
            <div className="absolute top-2/3 xl:top-1/2 text-center xl:right-28 -translate-y-1/2 xl:text-right text-base xl:text-2xl font-light w-full xl:w-[486px] tracking-[.35rem]">
                {t('introduction.createHomes')} <br />
                {t('introduction.designExperiences')}
            </div>

            <div className="absolute xl:hidden top-3/4 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <ImageGetter folder="icons" image="downArrow" width={27} height={27} color="#fff" onClick={() => handleNavigation(Sections.ABOUT_US)} />
            </div>

            <button
                onClick={handleWhatsAppClick}
                className="absolute bottom-8 xl:bottom-14 right-1/2 translate-x-1/2 xl:translate-x-0 xl:right-28 p-2 bg-white text-black rounded-full flex gap-2 items-center z-10"
            >
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