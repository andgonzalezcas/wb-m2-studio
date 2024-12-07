import { ReactNode } from "react";

interface props {
    children: ReactNode;
}

const DotWithText = ({ children }: props) => {
    return (
        <div className="flex gap-5 ">
            <div className="w-[6px] h-[6px] bg-[#FFD4BA] m-1" />
            <div>{children}</div>
        </div>
    )
}

export default DotWithText;