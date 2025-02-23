import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Sections } from "@/enums/global";
import PlusButton from "../../atoms/plusButton";
import m2Icon from "@/assets/m2studio/icon.svg";
import ImageGetter from "@/assets/ImageGetter";

const Navbar = () => {
    const [isScrollDownVisible, setIsScrollDownVisible] = useState(true);
    const scrollDownRef = useRef(null);

    const handleNavigation = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && !isScrollDownVisible) {
                gsap.to(scrollDownRef.current, { opacity: 1, y: 0, duration: 0.5 });
                setIsScrollDownVisible(true);
            } else if (window.scrollY !== 0 && isScrollDownVisible) {
                gsap.to(scrollDownRef.current, { opacity: 0, y: 20, duration: 0.5 });
                setIsScrollDownVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            gsap.killTweensOf(scrollDownRef.current);
        };
    }, [isScrollDownVisible]);

    return (
        <div className="h-screen w-fit hidden fixed top-0 left-0 xl:flex flex-col justify-between items-center border-r bg-opacity-0 mix-blend-difference text-white font-normal p-5 z-50">
            <img
                src={m2Icon}
                alt="Logo de M2 Studio"
                width="52"
                height="52"
            />

            <section className="flex flex-col gap-6">
                <PlusButton onClick={() => handleNavigation(Sections.ABOUT_US)} />
                <PlusButton onClick={() => handleNavigation(Sections.OUR_WAY)} />
                <PlusButton onClick={() => handleNavigation(Sections.WHY_CHOOSE_US)} />
                <PlusButton onClick={() => handleNavigation(Sections.OUR_SERVICES)} />
                <PlusButton onClick={() => handleNavigation(Sections.DESIGN_EXPERIENCES)} />
            </section>

            <div className="relative">
                <div ref={scrollDownRef} className="flex flex-col gap-4 justify-center items-center absolute bottom-10 -left-3">
                    <p className="[writing-mode:vertical-lr] font-medium text-base">Scroll down</p>
                    <ImageGetter folder="icons" image="downArrow" width={27} height={27} color="#fff" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
