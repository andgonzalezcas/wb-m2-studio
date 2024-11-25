import { ReactElement } from "react";
import Navbar from "../components/molecules/navbar/navbar";
import Menubar from "@/components/molecules/menubar/menubar";

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
            <Menubar />
        </div>
    )
}

export default Navigator;