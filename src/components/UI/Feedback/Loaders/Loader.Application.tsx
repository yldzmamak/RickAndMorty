import React from "react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";

import { FullPageLoader } from ".";

type LoaderProps = {
  children: React.ReactNode;
};

const ApplicationLoader = ({ children }: LoaderProps) => {

  const { t } = useTranslation();
  const { auth: { logout }, characterList } = useAppSelector((state: IStore) => ({
    auth: state.auth,
    characterList: state.common.characterList,
  }));

  const handleMessages = () => {
    let message = "";

    if (logout) {
      message = t("messages.logoutSuccessInfo");
    } else if(characterList.loading) {
      message = t("messages.characterListLoading");
    }

    return message;
  };

  return (
    <>
      <FullPageLoader
        loading={logout || characterList.loading}
        message={handleMessages()}
      />
      {!logout && children}
    </>
  );
};

export default ApplicationLoader;