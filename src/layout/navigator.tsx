import { ReactElement, useEffect, useState } from "react";
import Navbar from "../components/molecules/navbar/navbar";
import Menubar from "@/components/molecules/menubar/menubar";
import { Sections } from "@/enums/global";

interface props {
    children: ReactElement;
}

const Navigator = ({ children }: props) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(Sections.OUR_TEAM);
            if (section) {
                const rect = section.getBoundingClientRect();
                const shouldBeDark = rect.top <= window.innerHeight / 2;

                if (shouldBeDark !== isDark) {
                    setIsDark(shouldBeDark);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDark]);

    return (
        <div className="w-full h-screen flex justify-center">
            <Navbar isDark={isDark} />
            <div className="w-full h-screen">
                {children}
            </div>
            <Menubar isDark={isDark} />
        </div>
    )
}

export default Navigator;