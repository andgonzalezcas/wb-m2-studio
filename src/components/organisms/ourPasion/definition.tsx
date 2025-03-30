import { useLingui } from "@lingui/react";
import SectionList from "@/components/atoms/sectionList";

export const useOurPasionList = () => {
    const { i18n: t } = useLingui();

    return [
        {
            id: 1,
            title: t._("our_passion.steps"),
            children: <SectionList
                label={t._("our_passion.steps_description")}
                list={[
                    { text: t._("our_passion.steps_point_1") },
                    { text: t._("our_passion.steps_point_2") },
                    { text: t._("our_passion.steps_point_3") },
                    { text: t._("our_passion.steps_point_4") },
                ]}
            />
        },
        {
            id: 2,
            title: t._("our_passion.project_contains"),
            children: <SectionList
                list={Array.from({ length: 7 }, (_, i) => ({
                    text: t._(`our_passion.project_point_${i + 1}`),
                }))}
            />
        },
        {
            id: 3,
            title: t._("our_passion.design_finishes"),
            children: <SectionList
                label={t._("our_passion.design_finishes_description")}
                list={Array.from({ length: 4 }, (_, i) => ({
                    text: t._(`our_passion.design_finishes_point_${i + 1}`),
                }))}
            />
        },
        {
            id: 4,
            title: t._("our_passion.technology"),
            children: <>
                <SectionList
                    list={Array.from({ length: 3 }, (_, i) => ({
                        text: t._(`our_passion.technology_point_${i + 1}`),
                    }))}
                />
                <p className="text-xl xl:text-3xl w-full text-left pt-6">
                    {t._("our_passion.technology_info")}
                </p>
            </>
        }
    ];
};