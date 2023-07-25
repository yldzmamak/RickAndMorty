import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Row } from "antd";

import AuthBG from "@/pages/Auth/Login/Auth.BG";
import { AuthService } from "@/services/auth.service";
import { pathNames } from "@/types/constants/common";


const Auth = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    if (AuthService.isUserLoggedIn()) {
      navigate(pathNames.episodesPage);
    }
  }, [AuthService.isUserLoggedIn()]);

  return (
    <Row className="authentication fadeIn">
      <AuthBG />
      <Outlet></Outlet>
    </Row>
  );
};

export default React.memo(Auth);