import ImageGetter from "@/assets/ImageGetter";
import DotWithText from "@/components/atoms/dotWithText";

import refactor from "@/assets/image/why_choose_us_section/refactor.png";
import design from "@/assets/image/why_choose_us_section/design.png";
import { Sections } from "@/enums/global";
import MovingImage from "@/components/atoms/movingImage";
import ServiceList from "@/components/atoms/serviceList";
import { useLanguage } from "@/hooks/useLanguage";

const WhyChooseUs = () => {
    const { t } = useLanguage();

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
                    <h3 className="text-left text-4xl xl:text-8xl font-thin xl:mb-16">{t('whyChooseUs.title').split('\n').map((line, index) => <span key={index}>{line} <br /></span>)}</h3>
                    <div className="hidden xl:block">
                        <DotWithText>
                            <ServiceList />
                        </DotWithText>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row">
                <section className="text-left xl:text-right w-full xl:w-1/2 p-10 xl:p-16 xl:text-lg font-light flex flex-col gap-3 xl:border-r">
                    <p>{t('whyChooseUs.designAndRenovate')}</p>
                    <p>{t('whyChooseUs.professionals')}</p>
                    <p>{t('whyChooseUs.certifiedProfessionals')}</p>
                    <p>{t('whyChooseUs.deadlineGuarantee')}</p>
                    <p>{t('whyChooseUs.qualityPrice')}</p>
                    <p>{t('whyChooseUs.postWorkWarranty')}</p>
                </section>

                <div className="object-cover w-full xl:w-1/2  h-screen max-h-[554px]">
                    <MovingImage imgSrc={refactor} />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 h-full border-r">
                    <div className="object-cover w-full h-screen max-h-[554px]">
                        <MovingImage imgSrc={design} />
                    </div>
                </div>

                <div className="w-full xl:w-1/2 p-10 xl:p-16 flex flex-col justify-between text-left gap-5">
                    <h4 className="font-extralight text-2xl xl:text-6xl">{t('whyChooseUs.projectIncluded')}</h4>
                    <section className="text-left xl:text-left xl:text-lg font-light flex flex-col gap-3">
                        <p>{t('whyChooseUs.projectDescription')}</p>
                        <p><b>{t('whyChooseUs.specialAttention')}</b></p>
                        <p>{t('whyChooseUs.optimizeSpaces')}</p>
                        <p>{t('whyChooseUs.lightingAndStorage')}</p>
                    </section>
                </div>
            </div>

            <div className="w-1/2 border-r p-16 xl:pb-60 hidden xl:block">
                <DotWithText>
                    <ServiceList />
                </DotWithText>
            </div>
        </div>
    )
}

export default WhyChooseUs;