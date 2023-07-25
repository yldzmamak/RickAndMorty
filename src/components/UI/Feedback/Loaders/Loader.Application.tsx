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
  const { auth: { logout } } = useAppSelector((state: IStore) => ({
    auth: state.auth,
  }));

  const handleMessages = () => {
    let message = "";

    if (logout) {
      message = t("messages.logoutSuccessInfo");
    }

    return message;
  };

  return (
    <>
      <FullPageLoader
        loading={logout}
        message={handleMessages()}
      />
      {!logout && children}
    </>
  );
};

export default ApplicationLoader;