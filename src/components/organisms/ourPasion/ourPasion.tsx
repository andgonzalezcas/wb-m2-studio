import ImageGetter from "@/assets/ImageGetter";
import DotWithText from "@/components/atoms/dotWithText";
import { ourPasionList } from "./definition";
import imageImported from "@/assets/image/our_pasion/pasion.png";
import AccordionList from "@/components/molecules/accordionList/accordionList";
import MovingImage from "@/components/atoms/movingImage";
import { Sections } from "@/enums/global";
import ServiceList from "@/components/atoms/serviceList";

const OurPasion = () => {
    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] border-t border-b py-10 xl:py-16" id={Sections.OUR_PASSION}>
            <div className="w-full xl:w-1/2 px-10 xl:px-16">
                <ImageGetter
                    folder="m2studio"
                    image="dark_logo"
                    width={145}
                />
                <div className="flex items-end justify-between">
                    <h3 className="text-left text-4xl xl:text-8xl font-extralight">Nuestra <br />Forma</h3>
                    <div className="hidden xl:block">
                        <DotWithText>
                            <ServiceList />
                        </DotWithText>
                    </div>
                </div>
            </div>

            <div className="w-full px-10 xl:px-16 pt-10 flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 h-auto xl:min-h-[850px] object-cover text-gray-600 max-w-[704px]">
                    <MovingImage imgSrc={imageImported} />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-10 mt-10 xl:mt-0">
                    <AccordionList list={ourPasionList} />
                </div>
            </div>
        </div>
    )
}

export default OurPasion;