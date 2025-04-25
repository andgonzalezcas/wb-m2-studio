import ImageGetter from "@/assets/ImageGetter";
import LinkButton from "@/components/atoms/linkButton";
import { Sections } from "@/enums/global";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <div className="w-full xl:px-[93px]" id={Sections.FOOTER}>
            <div className="flex flex-col-reverse xl:flex-col">
                <div className="w-full px-5 xl:px-16">
                    <div className="w-full flex justify-between xl:justify-end xl:gap-20">
                        <LinkButton
                            label="Instagram"
                            link="https://www.instagram.com/m2studio.es/?igsh=MWhsb2xsMXp4MzQ4aw%3D%3D"
                        />
                        <LinkButton
                            label="Linkedin"
                            link="https://www.linkedin.com/company/m-2studio/"
                        />
                        <LinkButton
                            label="Threads"
                            link="https://www.threads.net/@m2studio.es?xmt=AQGzj_tLNNbXH8f_wM_hnUh44SPj_4v60ZKzNA-sNcFJlyw"
                        />
                        <LinkButton
                            label="Pinterest"
                            link="https://es.pinterest.com/m2sstudio/"
                        />
                        <LinkButton
                            label="Facebook"
                            link="https://www.facebook.com/people/M2studio/61566699791667/"
                        />
                    </div>
                </div>
                <ImageGetter
                    folder="m2studio"
                    image="dark_logo"
                    classname="pl-5 xl:pl-10 xl:border-b"
                />
            </div>
            <div className="w-full flex text-xs xl:text-base font-light">
                <p className="w-1/2 xl:w-2/6 xl:border-r p-6 xl:p-6 xl:pl-16 text-left flex items-center">
                    Calle Rubens esq. Calle Fortuny <br />
                    Poligono Industrial Rabasa. <br />
                    03009 Alicante
                </p>
                <div className="w-1/2 xl:w-3/6 flex flex-col xl:flex-row p-6 xl:p-0">
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">info@m2studio.es</p>
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">(+34) 696 94 17 75</p>
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">Copyright 2025</p>
                </div>
                <p className="hidden xl:flex w-1/6 p-6 items-center justify-center text-5xl font-medium">25</p>
            </div>
            <div className="flex flex-col xl:flex-row border-t justify-between text-xs xl:text-base xl:child:p-16 p-4 xl:p-0 font-light">
                <p className="">Bsod Studio 2025</p>
                <p className="">{t("footer.privacyPolicy")}</p>
                <p className="">{t("footer.termsOfUse")}</p>
            </div>
        </div>
    )
}

export default Footer;