import enUS from "antd/lib/locale/en_US";
import trTR from "antd/lib/locale/tr_TR";
import i18next from "i18next";
import moment from "moment";

import { LanguageTypes } from "@/types/system";


const changeLanguage = async (key: LanguageTypes): Promise<void> => {
	await i18next.changeLanguage(key);
};

const translate = (key: string): string => {
	return i18next.t(key);
};

const setAntdLanguage = (language: LanguageTypes, seti18nLocale: (e: any) => void) => {
	if (language === "tr") {
		return seti18nLocale(trTR);
	}
	if (language === "en") {
		return seti18nLocale(enUS);
	}
};

const setMomentLocale = (lng: LanguageTypes = "tr") => {
	const dayjsLocaleMap = {
		tr: "tr",
		en: "en",
	};

	if (lng in dayjsLocaleMap) {
		moment.locale(dayjsLocaleMap[lng]);
	}
};

export const i18n = {
	changeLanguage,
	setAntdLanguage,
	setMomentLocale,
	translate
};