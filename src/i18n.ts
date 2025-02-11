import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already does escaping
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
    });

export default i18next;
