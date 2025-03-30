import CardWithImage from "@/components/atoms/cardWithImage";
import { Sections } from "@/enums/global";
import { useLingui } from "@lingui/react/macro";
import { useState } from "react";
import { Modal, Carousel } from "@/components/molecules/modal/Modal";

import project_1 from "src/assets/image/recent_projects/project_1.png";
import project_2 from "src/assets/image/recent_projects/project_2.png";
import project_3 from "src/assets/image/recent_projects/project_3.png";

const RecentProjects = () => {
    const { i18n: t } = useLingui();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const projectImages = [project_1, project_2, project_3];

    const handleProjectClick = (index: number) => {
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative" id={Sections.RECENT_PROJECTS}>
            <div className="w-full pt-20 flex flex-col gap-11 items-center">
                <h3 className="w-full font-extralight text-4xl xl:text-6xl px-10 text-right xl:text-center ">{t._("recent_projects.title")}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                {projectImages.map((project, index) => (
                    <div key={index} onClick={() => handleProjectClick(index)} className="cursor-pointer">
                        <CardWithImage
                            image={project}
                            label={t._(`recent_projects.project_${index + 1}.label`)}
                            description={t._(`recent_projects.project_${index + 1}.description`)}
                            className="!h-[347px] xl:!h-[347px]"
                        />
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Carousel images={projectImages} initialIndex={selectedProjectIndex} onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default RecentProjects;