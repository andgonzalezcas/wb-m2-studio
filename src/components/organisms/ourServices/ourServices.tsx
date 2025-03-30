import CardWithImage from "@/components/atoms/cardWithImage";
import DotWithText from "@/components/atoms/dotWithText";
import { Sections } from "@/enums/global";

import reform_image from "src/assets/image/our_service/reform.png";
import important_points_image from "src/assets/image/our_service/important_points.png";
import design_image from "src/assets/image/our_service/design.png";
import deadlines_image from "src/assets/image/our_service/deadlines.png";
import profesionals_image from "src/assets/image/our_service/profesionals.png";
import security_image from "src/assets/image/our_service/security.png";
import { useLanguage } from "@/hooks/useLanguage";

const OurServices = () => {
    const { t } = useLanguage();

    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative border-b" id={Sections.OUR_SERVICES}>
            <div className="absolute top-10 right-[133px] hidden xl:block">
                <DotWithText>
                    <p className="text-left text-5xl font-extralight">
                        04
                    </p>
                </DotWithText>
            </div>

            <div className="w-full pt-20 flex flex-col gap-2 xl:gap-11 items-center">
                <div className="xl:hidden w-full flex justify-end px-10">
                    <DotWithText>
                        <p className="text-right text-5xl font-extralight">
                            04
                        </p>
                    </DotWithText>
                </div>
                <h3 className="font-extralight text-4xl xl:text-6xl text-right xl:text-center w-full px-10">{t("ourServices.heading")}</h3>
                <p className="xl:text-xl">{t("ourServices.description")}</p>
                <p className="font-extralight xl:text-3xl max-w-full xl:max-w-[1280px] leading-5 px-6">
                    {t("ourServices.types").split("\u2022").map((item, index, array) => (
                        <span key={index}>
                            {item}
                            {index < array.length - 1 && <span className="px-3 xl:px-7">&middot;</span>}
                        </span>
                    ))}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                <CardWithImage
                    image={reform_image}
                    label={t("ourServices.reform.label")}
                    description={t("ourServices.reform.description")}
                />
                <CardWithImage
                    image={important_points_image}
                    label={t("ourServices.importantPoints.label")}
                    description={t("ourServices.importantPoints.description")}
                />
                <CardWithImage
                    image={design_image}
                    label={t("ourServices.design.label")}
                    description={t("ourServices.design.description")}
                />
                <CardWithImage
                    image={deadlines_image}
                    label={t("ourServices.deadlines.label")}
                    description={t("ourServices.deadlines.description")}
                />
                <CardWithImage
                    image={profesionals_image}
                    label={t("ourServices.professionals.label")}
                    description={t("ourServices.professionals.description")}
                />
                <CardWithImage
                    image={security_image}
                    label={t("ourServices.security.label")}
                    description={t("ourServices.security.description")}
                />
            </div>
        </div>
    )
}

export default OurServices;