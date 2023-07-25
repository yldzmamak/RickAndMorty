import React from "react";

import { Col, Layout, Row, Typography } from "antd";

import { SystemService } from "@/services/system.service";

const Footer = () => {
  return (
    <Layout.Footer>
      <Row className="footer" justify="space-between">
        <Col className="footer-left">
          <Typography.Title className="font-weight-5 fs-11" level={5}>
            © {new Date().getFullYear()} The Rick and Morty v{SystemService.getLocalSystemConfig().version}
          </Typography.Title>
        </Col >
      </Row >
    </Layout.Footer >
  );
};

export default React.memo(Footer);