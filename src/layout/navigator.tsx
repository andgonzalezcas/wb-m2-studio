import { ReactElement } from "react";
import Navbar from "../components/molecules/navbar/navbar";

interface props {
    children: ReactElement;
}

const Navigator = ({ children
}: props) => {
    return (
        <div className="w-full h-screen flex justify-center">
            <Navbar />
            <div className="w-full h-screen">
                {children}
            </div>
        </div>
    )
}

export default Navigator;