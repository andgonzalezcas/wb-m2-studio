import CardWithImage from "@/components/atoms/cardWithImage";
import DotWithText from "@/components/atoms/dotWithText";
import { Sections } from "@/enums/global";

const OurServices = () => {
    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative border-b" id={Sections.OUR_SERVICES}>
            <div className="absolute top-10 right-[133px] hidden xl:block">
                <DotWithText>
                    <p className="text-left text-5xl font-extralight">
                        04
                    </p>
                </DotWithText>
            </div>

            <div className="w-full pt-20 flex flex-col gap-2 xl:gap-11 items-center">
                <div className="xl:hidden w-full flex justify-end px-10">
                    <DotWithText>
                        <p className="text-right text-5xl font-extralight">
                            04
                        </p>
                    </DotWithText>
                </div>
                <h3 className="font-extralight text-4xl xl:text-6xl text-right xl:text-center w-full px-10">Nuestros servicios</h3>
                <p className="xl:text-xl">Reformas de todo tipo de espacios</p>
                <p className="font-extralight xl:text-3xl max-w-full xl:max-w-[1280px] leading-5 px-6">
                    <span>Reformas integrales</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>semi integrales</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>baños</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>cocinas</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>cambios de uso</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>viviendas turísticas</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>Home Staging</span>
                    <span className="px-3 xl:px-7">&middot;</span>
                    <span>Relooking</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                <CardWithImage
                    image="src/assets/image/our_service/reform.png"
                    label="Reforma"
                    description="Antes de comenzar una reforma, es crucial tener en cuenta algunas cosas para facilitarnos nuestra labor y ayudarnos a conectar con las verdaderas necesidades de nuestros clientes."
                />
                <CardWithImage
                    image="src/assets/image/our_service/important_points.png"
                    label="Puntos más importantes"
                    description="El Presupuesto: Antes de empezar cualquier reforma, debes plantear el presupuesto. Es importante tener claro que quieres o puedes invertir en tu reforma. Debe ser una cantidad realista, acorde con tu realidad."
                />
                <CardWithImage
                    image="src/assets/image/our_service/design.png"
                    label="Diseño"
                    description="Otro punto muy importante a tener en cuenta es el diseño. Cuanto más claro tienes tus necesidades, más podremos ayudarte a conseguir el espacio deseado."
                />
                <CardWithImage
                    image="src/assets/image/our_service/deadlines.png"
                    label="Plazos"
                    description="Es importante saber cuando te viene bien que realicemos tu obra para así intentar encajarlo y que no se convierta en un problema. En m2.Studio, te indicaremos el tiempo necesario para preparar y ejecutar tu obra. Para nosotros es importante cumplir con los plazos establecidos por lo que el cliente debe ser consciente que los cambios improvistos por su parte retrasan una obra y una vez establecidos todos los detalles, intentamos ceñirnos a lo acordado."
                />
                <CardWithImage
                    image="src/assets/image/our_service/profesionals.png"
                    label="Profesionales"
                    description="Contar con un equipo de profesionales cualificados y certificados con experiencia para realizar la reforma, es de suma importancia. Nuestro equipo de m2.Studio te ofrece la garantía de entrega de unos acabados óptimos. Siempre velando para minimizar complicaciones y errores desde el principio."
                />
                <CardWithImage
                    image="src/assets/image/our_service/security.png"
                    label="Seguridad"
                    description="Para nosotros la seguridad de nuestro equipo es importantísimo, por lo que nos aseguramos que todo nuestro equipo cuenta con lo necesario para abordar cada reforma sin percances y con la mayor seguridad posible. Durante la reforma es importante tener en cuenta la seguridad. Nos aseguramos de que nuestros profesionales tienen la formación necesaria para realizar nuestras obras."
                />
            </div>
        </div>
    )
}

export default OurServices;