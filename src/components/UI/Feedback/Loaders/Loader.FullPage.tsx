
import React from "react";

import { Col, Row } from "antd";

import { Typography } from "../../General";

const loaderGif = require("@/assets/images/loader/loader.gif") as string;

type FullPageLoaderProps = {
  loading: boolean;
  message: null | string;
  useFixed?: boolean;
};

const FullPageLoader = ({ loading, message }: FullPageLoaderProps) => {

  return (
    <Row className={`full-page-loader full fadeOut ${loading ? "out" : ""}`}>
      <div className="full-page-loader-content">
        {
          <img className="full-page-loader-content-gif" src={loaderGif} />
        }
        {message && typeof message === "string" && (
          <Col>
            <Typography.H level={3} style={{ width: "max-content" }}>
              {message}
            </Typography.H>
          </Col>
        )}
      </div>
    </Row>
  );
};

export default FullPageLoader;
