import React from "react";
import { ReactSVG } from "react-svg";

import { Col, Modal, Row, Typography } from "antd";

import { i18n } from "@/translations/helpers/Internationalization";
import { IErrorHandler } from "@/types/system";

import { history } from "./History";


const errorIcon = require("@/assets/icons/result/404.svg") as string;

const ErrorNotification = ({ message, deviceType, statusCode }: IErrorHandler) => {


  switch (deviceType) {
    case "DESKTOP":
    case "MOBILE":
    case "TABLET":
      Modal.warning({
        icon: null,
        title: null,
        centered: true,
        width: deviceType === "MOBILE" ? 325 : 355,
        okText: i18n.translate("button.OK"),
        onOk: statusCode === 401 ? (() => history.push("/login")) : () => null,
        className: "global-error-modal",
        content: (
          <Row>
            <Col xs={24} className="global-error-modal-header">.</Col>
            <ReactSVG src={errorIcon} />
            <Typography.Title className="error-head" level={3}>
              {i18n.translate("label.error")}
            </Typography.Title >
            <Typography.Paragraph className="error-info">
              {i18n.translate("messages.operationCouldNotBePerformed")}
            </Typography.Paragraph >
            {
              statusCode === 400 || statusCode === 406 || statusCode === 401 ?
                <Typography.Paragraph className="error-message">
                  {`${i18n.translate("label.error")}: ${i18n.translate(message)}`}
                </Typography.Paragraph >
                :
                <React.Fragment />
            }
          </Row >
        )
      });
      break;
    default:
      break;
  }
};

export default ErrorNotification;