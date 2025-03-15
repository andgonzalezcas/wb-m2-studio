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

    return (
        <div
            ref={navbarRef}
            className={`h-screen w-fit hidden fixed top-0 left-0 xl:flex flex-col justify-between items-center border-r bg-opacity-0 p-5 z-50 transition-colors duration-300 ${isDark ? "border-[#232C33]" : "border-white"}`}
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
            <section className="flex flex-col gap-6">
                <PlusButton
                    onClick={() => handleNavigation(Sections.ABOUT_US)}
                    isDark={isDark}
                />
                <PlusButton
                    onClick={() => handleNavigation(Sections.OUR_WAY)}
                    isDark={isDark}
                />
                <PlusButton
                    onClick={() => handleNavigation(Sections.WHY_CHOOSE_US)}
                    isDark={isDark}
                />
                <PlusButton
                    onClick={() => handleNavigation(Sections.OUR_SERVICES)}
                    isDark={isDark}
                />
                <PlusButton
                    onClick={() => handleNavigation(Sections.DESIGN_EXPERIENCES)}
                    isDark={isDark}
                />
            </section>

            {/* Scroll Indicator */}
            <div className="relative">
                <div
                    ref={scrollDownRef}
                    className="flex flex-col gap-4 justify-center items-center absolute bottom-10 -left-3"
                >
                    <p className="[writing-mode:vertical-lr] font-medium text-base">Scroll down</p>
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
    );
};

export default Navbar;
