import React from "react";
import { ReactSVG } from "react-svg";

import { Dropdown } from "antd";

import { LanguageTypes } from "@/types/system";


const chevronIcon = require("@/assets/icons/chevron.svg") as string;
const TR = require("@/assets/icons/header/flags/TR.svg") as string;
const GB = require("@/assets/icons/header/flags/GB.svg") as string;

type LanguageListItem = {
  label: string;
  key: LanguageTypes;
  icon: React.ReactNode;
};

const languageList: LanguageListItem[] = [
  {
    label: "TR", key: "tr", icon: <ReactSVG className="language-flag" src={TR} />
  },
  { label: "EN", key: "en", icon: <ReactSVG className="language-flag" src={GB} /> },
];

type LanguageSelectionProps = {
  currentLang: LanguageTypes;
  languageChange: (lang: LanguageTypes) => void;
};

const LanguageSelection = ({ currentLang, languageChange }: LanguageSelectionProps) => {

  const foundedLang = languageList.find((item: LanguageListItem) => item.key === currentLang);

  const onChangeLanguage = (key: LanguageTypes) => {
    languageChange(key);
  };

  return (
    <div className="language-selection">
      < Dropdown
        className="language-selector"
        placement="bottomRight"
        trigger={["hover"]}
        menu={{ items: languageList, onClick: (e: any) => onChangeLanguage(e.key) }
        }
      >
        <div>
          <div className="language-title">{foundedLang ? foundedLang.label : "TR"}</div>
          <ReactSVG className="language-trigger-icon" src={chevronIcon} />
        </div >
      </Dropdown >
    </div >
  );
};

export default React.memo(LanguageSelection);