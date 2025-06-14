import czechTrans from "../public/locales/cs/cs_CZ.json";
import englishTrans from "../public/locales/en/en_US.json";
import esperantoTrans from "../public/locales/eo/eo_001.json";
import hungTrans from "../public/locales/hu/hu_HU.json";
import javaTrans from "../public/locales/jv/jv_ID.json";
import latinTrans from "../public/locales/lat/lat.json";
import klingonTrans from "../public/locales/tlh/tlh.json";
import cantonTrans from "../public/locales/yue/yue_CN.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    cs:{
        translation: czechTrans

    },
    en: {
        translation: englishTrans

    },
    eo: {
        translation: esperantoTrans
    },
    hu:{
        translation: hungTrans
    },
    jv:{
        translation: javaTrans
    },
    lat:{
        translation: latinTrans
    },
    tlh:{
        translation: klingonTrans
    },
    yue:{
        translation: cantonTrans
    }

}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "cs", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;