import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import MovingImage from "@/components/atoms/movingImage";
import { Sections } from "@/enums/global";
import imageImported from "@/assets/image/our_way/ourWay.png";
import DotWithText from "@/components/atoms/dotWithText";
import ServiceList from "@/components/atoms/serviceList";
import { useLanguage } from "@/hooks/useLanguage";

const OurWay = () => {
    const [showCommitment, setShowCommitment] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const commitmentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const DURATION = 2.5;

    const { t } = useLanguage();
    useEffect(() => {
        if (showCommitment) {
            gsap.fromTo(
                divRef.current,
                { left: 'calc(66.67% - 170px)' },
                { left: 'calc(66.67%)', duration: DURATION },
            );
            gsap.fromTo(
                commitmentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: DURATION },
            );
            gsap.to(imageRef.current, { opacity: 0, y: -20, duration: DURATION });
        } else {
            gsap.fromTo(
                divRef.current,
                { left: 'calc(66.67%)' },
                { left: 'calc(66.67% - 170px)', duration: DURATION },
            );
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: DURATION }
            );
            gsap.to(commitmentRef.current, { opacity: 0, y: 20, duration: DURATION });
        }

        return () => {
            gsap.killTweensOf(divRef.current);
            gsap.killTweensOf(commitmentRef.current);
            gsap.killTweensOf(imageRef.current);
        }
    }, [showCommitment]);

    return (
        <div
            ref={sectionRef}
            id={Sections.OUR_WAY}
            className="w-full min-h-screen bg-white xl:px-[92px] flex flex-col xl:flex-row"
        >
            <div
                ref={divRef}
                className="hidden xl:block relative border-r border-[#C8CACC] min-h-screen h-full"
                style={{
                    left: showCommitment ? 'calc(66.67%)' : 'calc(66.67% - 170px)',
                    height: sectionRef.current ? sectionRef.current.offsetHeight : 0
                }}
            />
            <div className="w-full xl:w-2/3">
                {/* Image step */}
                <div ref={imageRef} className={`w-full flex flex-col items-end py-10 xl:py-16 ${showCommitment ? "hidden" : ""}`}>
                    <div className="p-10">
                        <DotWithText>
                            <p className="text-left text-5xl font-extralight">
                                02
                            </p>
                        </DotWithText>
                    </div>
                    <div className="w-full max-h-[529px] h-screen">
                        <MovingImage imgSrc={imageImported} />
                    </div>
                    <div className="p-10">
                        <DotWithText>
                            <ServiceList />
                        </DotWithText>
                    </div>
                </div>

                {/* Commitment step */}
                <div
                    ref={commitmentRef}
                    className={`w-full text-justify p-10 xl:p-16 text-[#3D3D3D] text-sm/6 xl:text-lg/6 flex flex-col gap-8 h-full justify-center cursor-pointer ${showCommitment ? "" : "hidden"}`}
                >
                    <p>
                        {t('ourWay.commitment.description').split("\b").map((text, index) => (
                            <span key={index}>
                                {(index % 2 == 1)
                                    ? (<b>{text}</b>)
                                    : text}
                            </span>
                        ))}
                    </p>
                    <p>
                        {t('ourWay.commitment.listIntro')}
                    </p>
                    <ul className="list-decimal pl-6">
                        <li>{t('ourWay.commitment.points.0')}</li>
                        <li>{t('ourWay.commitment.points.1')}</li>
                        <li>{t('ourWay.commitment.points.2')}</li>
                        <li>{t('ourWay.commitment.points.3')}</li>
                        <li>{t('ourWay.commitment.points.4')}</li>
                        <li>{t('ourWay.commitment.points.5')}</li>
                        <li>{t('ourWay.commitment.points.6')}</li>
                    </ul>
                    <p className="text-sm/6 xl:text-lg/6">
                        {t('ourWay.commitment.conclusion').split("\b").map((text, index) => (
                            <span key={index}>
                                {(index % 2 == 1)
                                    ? (<b>{text}</b>)
                                    : text}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* static text */}
            <div className="w-full xl:w-1/3 text-left p-10 xl:p-16 xl:h-screen flex flex-col justify-center">
                <p className="font-normal text-base">studio</p>
                <p className="max-w-[286px] text-2xl xl:text-3xl font-thin">
                    {t('ourWay.staticTextDescription').split("\b").map((text, index) => (
                        <span key={index}>
                            {(index % 2 == 1)
                                ? (<u onClick={() => setShowCommitment((prev) => !prev)} className="decoration-1 cursor-pointer">{text}</u>)
                                : text}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default OurWay;
