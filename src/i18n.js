import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init(
    {
        lng: "pt"
        ,fallbackLng: "en"
        ,resources: { 
            en: {
                translation: {
                    title: 'Multi-language app',
                    description: "Test"
                }
            },
            pt: {
                translation: {
                    title: 'Aplicação multi-lingual',
                    description: "Teste"
                }
            },
        }
        ,interpolation: { 
            escapeValue: false
        }
    }
)

export default i18n;