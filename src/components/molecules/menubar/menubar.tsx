interface props {
    isDark: boolean
}

const Menubar = ({ isDark }: props) => {
    return (
        <div className={`h-screen w-fit fixed top-0 right-0 hidden xl:flex flex-col justify-between items-center border-l bg-opacity-0 text-white font-normal p-5 transition-colors duration-300 ${isDark ? "border-[#232C33]" : "border-white"}`}>
            <section className="flex flex-col gap-2 cursor-pointer py-5 px-3">
                <div className={`w-7 h-[2px] bg-white ${isDark ? "bg-[#232C33]" : "bg-white"}`} />
                <div className={`w-4 h-[2px] bg-white ${isDark ? "bg-[#232C33]" : "bg-white"}`} />
            </section>
        </div>
    )
}

export default Menubar;