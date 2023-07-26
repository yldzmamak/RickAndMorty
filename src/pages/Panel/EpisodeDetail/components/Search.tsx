import React from "react";
import { useTranslation } from "react-i18next";
import { ReactSVG } from "react-svg";

import { Input } from "antd";

import { CommonActions } from "@/features/common";
import { useAppDispatch } from "@/hooks/useStore";

const searchIcon = require("@/assets/icons/search.svg") as string;

const Search = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [searchedValue, setSearchedValue] = React.useState<string>("");

  React.useEffect(() => {
    dispatch(CommonActions.setCharacterSearchName(searchedValue));
  }, [searchedValue]);

  return (
    <Input
      onChange={(e) => {
        setSearchedValue(e.currentTarget.value);
      }}
      prefix={<ReactSVG src={searchIcon} />}
      type="search"
      placeholder={t("messages.enterCharacterName")}
      enterKeyHint="enter"
    />
  );
};

export default React.memo(Search);
