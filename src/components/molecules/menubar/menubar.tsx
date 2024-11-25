const Menubar = () => {
    return (
        <div className="h-screen w-fit fixed top-0 right-0 flex flex-col justify-between items-center border-l bg-opacity-0 mix-blend-difference text-white font-normal p-5">
            <section className="flex flex-col gap-2 cursor-pointer py-5 px-3">
                <div className="w-7 h-[2px] bg-white" />
                <div className="w-4 h-[3px] bg-white" />
            </section>
        </div>
    )
}

export default Menubar;