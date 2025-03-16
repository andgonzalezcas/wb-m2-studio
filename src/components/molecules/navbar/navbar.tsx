import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Sections } from "@/enums/global";
import PlusButton from "../../atoms/plusButton";
import m2Icon from "@/assets/m2studio/icon.svg";
import ImageGetter from "@/assets/ImageGetter";
import { handleNavigation } from "@/utils/common";

interface props {
    isDark: boolean
};

const Navbar = ({ isDark }: props) => {
    const [isScrollDownVisible, setIsScrollDownVisible] = useState(true);
    const navbarRef = useRef<HTMLDivElement>(null);
    const scrollDownRef = useRef<HTMLDivElement>(null);

    const [scrollSections, setScrollSections] = useState<{ section: Sections, isActive: boolean }[]>([
        { section: Sections.INTRODUCTION, isActive: true },
        { section: Sections.ABOUT_US, isActive: false },
        { section: Sections.OUR_WAY, isActive: false },
        { section: Sections.WHY_CHOOSE_US, isActive: false },
        { section: Sections.OUR_SERVICES, isActive: false },
        { section: Sections.DESIGN_EXPERIENCES, isActive: false }
    ]);

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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const OFFSET = 1;
            const updatedSections = scrollSections.map((section, index) => {
                const element = document.getElementById(section.section);
                if (!element) return { ...section, isActive: false };

                const top = element.getBoundingClientRect().top + window.scrollY;
                const nextSection = scrollSections[index + 1];
                const nextElement = nextSection ? document.getElementById(nextSection.section) : null;
                const nextTop = nextElement ? nextElement.getBoundingClientRect().top + window.scrollY : document.body.scrollHeight;

                const isActive = window.scrollY >= top - OFFSET && window.scrollY < nextTop - OFFSET;
                return { ...section, isActive };
            });

            setScrollSections(updatedSections);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                ref={navbarRef}
                className={`h-screen w-fit hidden fixed top-0 left-0 xl:flex flex-col justify-between items-center border-r-0.5 bg-opacity-0 p-5 z-50 transition-colors duration-300 ${isDark ? "border-[#232C33]/40" : "border-white/40"}`}
            >
                {/* Logo */}
                <img
                    src={m2Icon}
                    alt="Logo de M2 Studio"
                    width="52"
                    height="52"
                    className={`transition-all duration-300 ${isDark ? "invert" : "invert-0"}`}
                />

                {/* Botones de Navegación */}
                <section className="flex flex-col gap-3">
                    {scrollSections.map((section, index) => (
                        <PlusButton
                            key={index}
                            onClick={() => handleNavigation(section.section)}
                            isDark={isDark}
                            isActive={section.isActive}
                        />
                    ))}
                </section>

                {/* Scroll Indicator */}
                <div className="relative h-14">
                    <div
                        ref={scrollDownRef}
                        className="flex flex-col gap-4 justify-center items-center absolute bottom-10 -left-3"
                    >
                        <p className="[writing-mode:vertical-lr] font-medium text-base text-white">Scroll down</p>
                        <ImageGetter
                            folder="icons"
                            image="downArrow"
                            width={27}
                            height={27}
                            color={"#fff"}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                ref={navbarRef}
                className={`h-fit w-full flex xl:hidden fixed top-0 left-0 flex-row justify-between items-center bg-opacity-10 p-3 pb-1 z-50 transition-colors duration-300 ${isDark ? "border-[#232C33] bg-[#232C33]" : "border-white bg-white"}`}
            >
                {/* Logo */}
                <img
                    src={m2Icon}
                    alt="Logo de M2 Studio"
                    width="28"
                    height="28"
                    className={`transition-all duration-300 ${isDark ? "invert" : "invert-0"}`}
                />

                {/* Botones de Navegación */}
                <section className="flex flex-row gap-4">
                    {scrollSections.map((section, index) => (
                        <PlusButton
                            key={index}
                            onClick={() => handleNavigation(section.section)}
                            isDark={isDark}
                            isActive={section.isActive}
                        />
                    ))}
                </section>

                <section className="flex flex-col gap-2 cursor-pointer py-5 xl:px-3">
                    <div className={`w-7 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
                    <div className={`w-4 h-0 border bg-white ${isDark ? "border-[#232C33]" : "border-white"}`} />
                </section>
            </div>
        </>
    );
};

export default Navbar;
