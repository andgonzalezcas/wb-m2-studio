import CardWithImage from "@/components/atoms/cardWithImage";
import { Sections } from "@/enums/global";
import { useLingui } from "@lingui/react/macro";

import project_1 from "src/assets/image/recent_projects/project_1.png";
import project_2 from "src/assets/image/recent_projects/project_2.png";
import project_3 from "src/assets/image/recent_projects/project_3.png";


const RecentProjects = () => {
    const { i18n: t } = useLingui();

    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative" id={Sections.RECENT_PROJECTS}>
            <div className="w-full pt-20 flex flex-col gap-11 items-center">
                <h3 className="w-full font-extralight text-4xl xl:text-6xl px-10 text-right xl:text-center ">{t._("recent_projects.title")}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                <CardWithImage
                    image={project_1}
                    label={t._("recent_projects.project_1.label")}
                    description={t._("recent_projects.project_1.description")}
                    className="!h-[347px] xl:!h-[347px]"
                />
                <CardWithImage
                    image={project_2}
                    label={t._("recent_projects.project_2.label")}
                    description={t._("recent_projects.project_2.description")}
                    className="!h-[347px] xl:!h-[347px]"
                />
                <CardWithImage
                    image={project_3}
                    label={t._("recent_projects.project_3.label")}
                    description={t._("recent_projects.project_3.description")}
                    className="!h-[347px] xl:!h-[347px]"
                />

                <div className="col-span-1 md:col-span-2 xl:col-span-3 flex justify-center">
                    <button className="mt-4 py-1 px-4 border-[#232C3340] border rounded-full">
                        {t._("recent_projects.view_all")}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default RecentProjects;