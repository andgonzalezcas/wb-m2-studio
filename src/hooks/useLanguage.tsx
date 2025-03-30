import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import en from '@/locale/en.json';
import es from '@/locale/es.json';

type Language = 'en' | 'es';
type TranslationDictionary = typeof es;

type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<TranslationDictionary>;

interface LanguageContextType {
    language: Language;
    translations: TranslationDictionary;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const translations: Record<Language, TranslationDictionary> = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getUserLocale = (): Language => 
    (navigator.language.startsWith('es') ? 'es' : 'en');

const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) as string || path;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(getUserLocale());

    const setLanguage = useCallback((newLanguage: Language) => {
        document.documentElement.lang = newLanguage;
        setLanguageState(newLanguage);
    }, []);

    const t = useCallback((key: TranslationKey) => {
        return getNestedValue(translations[language], key) || key;
    }, [language]);

    const value = {
        language,
        translations: translations[language],
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
