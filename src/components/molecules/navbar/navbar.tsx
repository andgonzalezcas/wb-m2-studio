import PlusButton from "../../atoms/plusButton";
import m2Icon from "@/assets/m2studio/icon.svg";

const Navbar = () => {
    return (
        <div className="h-screen w-fit hidden fixed top-0 left-0 xl:flex flex-col justify-between items-center border-r bg-opacity-0 mix-blend-difference text-white font-normal p-5 z-50">
            <img
                src={m2Icon}
                alt="Logo de M2 Studio"
                width="52"
                height="52"
            />

            <section className="flex flex-col gap-6">
                <PlusButton />
                <PlusButton />
                <PlusButton />
                <PlusButton />
            </section>

            <div className="flex flex-col gap-6">
                <p className="[writing-mode:vertical-lr] font-medium text-base">Scroll down</p>
                <div>X</div>
            </div>

        </div>
    )
}

export default Navbar;