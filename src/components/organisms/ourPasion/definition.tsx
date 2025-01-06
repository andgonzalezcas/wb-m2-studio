import { accordionItemProps } from "@/components/atoms/accordionItem";
import SectionList from "@/components/atoms/sectionList";

export const ourPasionList: accordionItemProps[] = [
    {
        id: 1,
        title: "Steps / pasos",
        children: <SectionList
            label="El proceso de obra desde el principio hasta el final"
            list={[
                { text: "Nos Conocemos Tras contactar con nosotros, te llamamos para establecer una fecha de quedada." },
                { text: "Realizamos la medición, tomamos fotos y vemos tus necesidades." },
                { text: "Preparamos tu proyecto sin ningún compromiso ni coste." },
                { text: "Te presentamos tu proyecto." },
            ]}
        />
    },
    {
        id: 2,
        title: "El proyecto contiene",
        children: <SectionList
            list={[
                { title: "Planos", text: "Estado Actual y Propuesta de Nueva Distribución" },
                { title: "Infografías", text: "Nuevo Diseño Virtual" },
                { title: "Propuesta Materiales", text: "Diseño" },
                { title: "Presupuesto Inteligente", text: "El primer presupuesto lo más aproximado a la realidad posible" },
                { title: "Reservas Nuestros Servicios", text: "Para poder reservar tu reforma en una franja de tiempo, y que podamos trabajar 100% en tu proyecto, es necesario realizar una reserva con nosotros." },
                { title: "Ajustes y Comparaciones", text: "Ya pasamos a elegir materiales definitivos y así poder realizar el presupuesto definitivo." },
                { title: "Preparamos Tu Reforma y la Realizamos", text: "Pasamos de digital y papel a la realidad. ¡Entramos en acción!" },
            ]}
        />
    },
    {
        id: 3,
        title: "Diseño y Elección de Acabados",
        children: <SectionList
            label="Asesoramiento 100%"
            list={[
                { text: "Te proponemos nueva distribución y diseño de “Tu Espacio”" },
                { text: "Proponemos posibles acabados y preparamos las muestras para que puedas comprobar el material del diseño físicamente." },
                { text: "Contamos con las mejores marcas y las más adecuadas para cada proyecto. Nuestro largo trayecto nos ha permitido recoger una gran variedad de proveedores de confianza." },
                { text: "Tras el proceso de selección, te enviamos un dossier con todo para que nos confirmes que todo está correcto. De esta manera, evitamos errores y todo queda claro." },
            ]}
        />
    },
    {
        id: 4,
        title: "La obra + Tecnología",
        children: <>
            <SectionList
                list={[
                    { text: "Establecemos fechas de comienzo, finalización y entrega de obra." },
                    { text: "Preparamos un Gant (diagrama que permite planificar la ejecución de la obra) para informarte cada semana que acciones vamos a realizar." },
                    { text: "Al final de cada semana, adjuntamos fotos y o videos del progreso por el canal que nos indicas que es mejor para ti (correo electrónico o Whats app)" },
                ]}
            />
            <p className="text-xl xl:text-3xl w-full text-left pt-6">Te mantendremos informad@ de cualquier novedad o cambio con un click del móvil.</p>
        </>
    },
]