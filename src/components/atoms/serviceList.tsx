import { useLingui } from "@lingui/react/macro";

const ServiceList = () => {
    const { i18n: t } = useLingui();

    return (
        <p className="text-left text-xs">
            {t._('general.service_list.design')} <br />
            {t._('general.service_list.interiorism')} <br />
            {t._('general.service_list.reform')}
        </p>
    );
};

export default ServiceList;