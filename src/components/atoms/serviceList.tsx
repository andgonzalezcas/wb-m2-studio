import { useLanguage } from "@/hooks/useLanguage";

const ServiceList = () => {
    const { t } = useLanguage();
    return (
        <p className="text-left text-xs">
            {t('general.serviceList.design')} <br />
            {t('general.serviceList.interiorism')} <br />
            {t('general.serviceList.reform')}
        </p>
    );
};

export default ServiceList;