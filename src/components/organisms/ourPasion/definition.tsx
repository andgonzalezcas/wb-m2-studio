import SectionList from "@/components/atoms/sectionList";
import { useLanguage } from "@/hooks/useLanguage";

export const useOurPasionList = () => {
    const { t } = useLanguage();

    return [
        {
            id: 1,
            title: t('ourPassion.steps.title'),
            children: <SectionList
                label={t('ourPassion.steps.description')}
                list={[
                    { text: t('ourPassion.steps.points.0') },
                    { text: t('ourPassion.steps.points.1') },
                    { text: t('ourPassion.steps.points.2') },
                    { text: t('ourPassion.steps.points.3') },
                ]}
            />
        },
        {
            id: 2,
            title: t('ourPassion.project.contains'),
            children: <SectionList
                list={Array.from({ length: 7 }, (_, i) => {
                    const item = t(`ourPassion.project.points.${i}`).split(":")

                    return {
                        title: item[0],
                        text: item[1],
                    }
                })}
            />
        },
        {
            id: 3,
            title: t("ourPassion.designFinishes.title"),
            children: <SectionList
                label={t("ourPassion.designFinishes.description")}
                list={Array.from({ length: 4 }, (_, i) => ({
                    text: t(`ourPassion.designFinishes.points.${i}`),
                }))}
            />
        },
        {
            id: 4,
            title: t("ourPassion.technology.title"),
            children: <>
                <SectionList
                    list={Array.from({ length: 3 }, (_, i) => ({
                        text: t(`ourPassion.technology.points.${i}`),
                    }))}
                />
                <p className="text-xl xl:text-3xl w-full text-left pt-6">
                    {t("ourPassion.technology.info")}
                </p>
            </>
        }
    ];
};