import { ReactElement } from "react";
import border from "../assets/icons/border.svg";

interface props {
    children: ReactElement;
}

const ContentWrapper = ({ children }: props) => {
    return (
        <div className="h-screen w-full relative">
            {/* header */}
            <section className='absolute top-10 flex w-full justify-between px-10'>
                <img src={border} alt="border plus icon" />
                <img src={border} alt="border plus icon" />
            </section>

            {/* main section */}
            {children}

            {/* hooter */}
            <section className='absolute bottom-10 flex w-full justify-between px-10'>
                <img src={border} alt="border plus icon" />
                <p className="text-lg font-light">www.m2studio.es</p>
                <img src={border} alt="border plus icon" />
            </section>
        </div >
    )
}

export default ContentWrapper;