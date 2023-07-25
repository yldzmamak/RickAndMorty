import React from "react";
import { connect } from "react-redux";

import { Col, Layout, Row } from "antd";

import WrappedLoader from "@/components/SuspenseLoader";
import { getLanguageSelector } from "@/features/system/systemSelectors";
import { SystemActions } from "@/features/system/systemSlices";
import { IStore } from "@/store/IStore";
import { LanguageTypes } from "@/types/system";

const loaderGif = require("@/assets/images/header/header-logo.png") as string;

const LanguageSelection = React.lazy(() => import("./LanguageSelection"));
const Logout = React.lazy(() => import("./Logout"));

type HeaderProps = {
  currentLang: LanguageTypes;
  languageChange: (lang: LanguageTypes) => void;
};

const Header = ({ currentLang, languageChange }: HeaderProps) => {

  const [scroll, setScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <Layout.Header className={`header ${scroll ? "active" : ""}`}>
      <Row className="header-row" wrap={false}>
        <Col className="header-left">
          <Col className="header-left-inner">
            <img className="header-logo" src={loaderGif} />
          </Col>
        </Col>
        <Col className="header-right">
          <Col className="header-right-inner">
            <React.Suspense fallback={<WrappedLoader />}>
              <LanguageSelection languageChange={languageChange} currentLang={currentLang} />
            </React.Suspense>
            <React.Suspense fallback={<WrappedLoader />}>
              <Logout />
            </React.Suspense>
          </Col>
        </Col>
      </Row>
    </Layout.Header >
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    currentLang: getLanguageSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    languageChange: (lang: LanguageTypes) => dispatch(SystemActions.setLanguage(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);