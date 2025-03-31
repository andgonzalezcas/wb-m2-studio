import { useState } from "react";
import { Sections } from "@/enums/global";
import { useLanguage } from "@/hooks/useLanguage";
import CardWithImage from "@/components/atoms/cardWithImage";
import { Modal, Carousel } from "@/components/molecules/modal/Modal";

import local1 from "@/assets/image/recent_projects/local/Local m2 studio1.png";
import local45 from "@/assets/image/recent_projects/local/Local m2 studio45.jpg";
import local48 from "@/assets/image/recent_projects/local/Local m2 studio48.jpg";
import local53 from "@/assets/image/recent_projects/local/Local m2 studio53.jpg";
import local56 from "@/assets/image/recent_projects/local/Local m2 studio56.jpg";

import studio2 from "@/assets/image/recent_projects/studio/M2 studio2.png";
import studio43 from "@/assets/image/recent_projects/studio/M2 studio43.jpg";
import studio47 from "@/assets/image/recent_projects/studio/M2 studio47.jpg";
import studio51 from "@/assets/image/recent_projects/studio/M2 studio51.jpg";
import studio55 from "@/assets/image/recent_projects/studio/M2 studio55.jpg";

import virgen3 from "@/assets/image/recent_projects/virgen/Virgen del socorro Urbana3.png";
import virgen1 from "@/assets/image/recent_projects/virgen/Virgen del socorro Urbana1.jpg";
import virgen24 from "@/assets/image/recent_projects/virgen/Virgen del socorro Urbana24.jpg";
import virgen80 from "@/assets/image/recent_projects/virgen/Virgen del socorro Urbana80.jpg";
import virgen98 from "@/assets/image/recent_projects/virgen/Virgen del socorro Urbana98.jpg";

const RecentProjects = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const projectsData = [
        {
            id: 'local',
            preview: local1,
            carouselImages: [local45, local48, local53, local56]
        },
        {
            id: 'studio',
            preview: studio2,
            carouselImages: [studio43, studio47, studio51, studio55]
        },
        {
            id: 'virgen',
            preview: virgen3,
            carouselImages: [virgen1, virgen24, virgen80, virgen98]
        }
    ];

    const handleProjectClick = (index: number) => {
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
    };

    const getProjectTranslation = (index: number, key: 'label' | 'description') => {
        return t(`recentProjects.projects.${index + 1}.${key}` as any);
    };

    return (
        <div className="w-full min-h-screen bg-white xl:px-[93px] relative" id={Sections.RECENT_PROJECTS}>
            <div className="w-full pt-20 flex flex-col gap-11 items-center">
                <h3 className="w-full font-extralight text-4xl xl:text-6xl px-10 text-right xl:text-center ">{t("recentProjects.title")}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-10 xl:px-24 justify-center w-full py-10 xl:py-32 text-left justify-items-center">
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        onClick={() => handleProjectClick(index)}
                        className="cursor-pointer"
                    >
                        <CardWithImage
                            image={project.preview}
                            label={getProjectTranslation(index, 'label')}
                            description={getProjectTranslation(index, 'description')}
                            className="!h-[347px] xl:!h-[347px]"
                        />
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Carousel
                    images={projectsData[selectedProjectIndex]?.carouselImages}
                    initialIndex={0}
                    onClose={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default RecentProjects;