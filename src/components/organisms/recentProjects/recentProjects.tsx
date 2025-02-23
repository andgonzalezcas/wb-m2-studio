import CardWithImage from "@/components/atoms/cardWithImage";
import { Sections } from "@/enums/global";

const RecentProjects = () => {
    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative" id={Sections.RECENT_PROJECTS}>
            <div className="w-full pt-20 flex flex-col gap-11 items-center">
                <h3 className="w-full font-extralight text-4xl xl:text-6xl px-10 text-right xl:text-center ">Proyectos Recientes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                <CardWithImage
                    image="src/assets/image/general_card_image.png"
                    label="Proyecto 01"
                    description="Antes de comenzar una reforma, es crucial tener en cuenta algunas cosas para facilitarnos nuestra labor y ayudarnos a conectar con las verdaderas necesidades de nuestros clientes."
                />
                <CardWithImage
                    image="src/assets/image/general_card_image.png"
                    label="Proyecto 02"
                    description="El Presupuesto: Antes de empezar cualquier reforma, debes plantear el presupuesto. Es importante tener claro que quieres o puedes invertir en tu reforma. Debe ser una cantidad realista, acorde con tu realidad."
                />
                <CardWithImage
                    image="src/assets/image/general_card_image.png"
                    label="Proyecto 03"
                    description="Otro punto muy importante a tener en cuenta es el diseño. Cuanto más claro tienes tus necesidades, más podremos ayudarte a conseguir el espacio deseado."
                />

                <div className="col-span-1 md:col-span-2 xl:col-span-3 flex justify-center">
                    <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full">
                        Ver todos
                    </button>
                </div>
            </div>
        </div>
    )
};

export default RecentProjects;