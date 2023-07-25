/* eslint-disable @typescript-eslint/no-floating-promises */
import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";

import { SystemService } from "@/services/system.service";

import { enMessages } from "./locales/en";
import { trMessages } from "./locales/tr";


/**
 * FIX:
 * i18next 22.0.5 versiyonda returnNull parametresi true çevrildiği için dil 
 * çevirilerinde hataya sebebiyet vermekteydi.
 * Aşağıda declare edilerek yazılan kod buna ait çözümdür. Next versiyonda kontrol edilip kaldıralabilir.
 */
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translations";
    returnNull: false;
    returnEmptyString: false;
  }
}

const language = SystemService.getLanguage(),
  detectionOptions = {
    order: ["path"],
    lookupFromPathIndex: 0
  };

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    resources: {
      en: { translations: { ...enMessages } },
      tr: { translations: { ...trMessages } },
    },
    lng: language,
    fallbackLng: language,
    debug: false,
    detection: detectionOptions,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    },
    react: {
      bindI18n: "languageChanged",
      useSuspense: true
    },
    returnNull: false
  });

moment.locale("en");


export default i18n;