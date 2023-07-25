import React from "react";
import { useTranslation } from "react-i18next";
import { ReactSVG } from "react-svg";

import { Button, Col, Row, Tooltip } from "antd";

import { AuthActions } from "@/features/auth/authSlices";
import { useAppDispatch } from "@/hooks/useStore";


const powerIcon = require("@/assets/icons/header/power.svg") as string;

const Logout = ({ logoutFromMobileMenu = false }: { logoutFromMobileMenu?: boolean }): JSX.Element => {

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(AuthActions.logout());
  };


  if (logoutFromMobileMenu) {
    return (
      <Row
        className="menu-item-logout"
        align="middle"
        onClick={() => {
          handleLogout();
        }}>
        <Col className="icon">
          <ReactSVG src={powerIcon} />
        </Col>
        <Col className="label">{t("button.logout")}</Col>
      </Row>
    );
  }

  return (
    <Row className="logout">
      <Tooltip destroyTooltipOnHide={true} placement="bottom" title={t("button.logout")} >
        <Button className="btn-logout" onClick={handleLogout}>
          <ReactSVG src={powerIcon} />
        </Button>
      </Tooltip >
    </Row >
  );
};

export default React.memo(Logout);