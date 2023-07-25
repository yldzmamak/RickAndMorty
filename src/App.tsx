import React from "react";
import { useLocation } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
// eslint-disable-next-line import/order
import { ConfigProvider, Spin } from "antd";

Spin.setDefaultIndicator(<LoadingOutlined style={{ color: "#26D07C" }} />);

import trTR from "antd/lib/locale/tr_TR";

import AuthGuard from "@/routes/AuthGuard";
import Router from "@/routes/routes";
import { IStore } from "@/store/IStore";

import { ApplicationLoader } from "./components/UI";
import { getLanguageSelector } from "./features/system/systemSelectors";
import { useAppSelector } from "./hooks";
import useMediaQuery from "./hooks/useMediaQuery";
import { i18n } from "./translations/helpers/Internationalization";


const App = () => {

  const { pathname } = useLocation();
  const [i18nLocale, seti18nLocale] = React.useState(trTR);

  const { language } = useAppSelector((state: IStore) => ({
    language: getLanguageSelector(state),
  }));

  const MOBILE_VIEW = useMediaQuery("(max-width: 500px)");

  React.useEffect(() => {
    i18n.setAntdLanguage(language, seti18nLocale);
    i18n.setMomentLocale(language);    
  }, [language]);

  React.useEffect(() => {
    if (MOBILE_VIEW) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    }
  }, [MOBILE_VIEW, pathname]);

  return (
    <ConfigProvider locale={i18nLocale}>
      <ApplicationLoader>
        <AuthGuard>
          <Router />
        </AuthGuard>
      </ApplicationLoader>
    </ConfigProvider>
  );
};

export default App;