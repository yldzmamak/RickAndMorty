import React from "react";
import { useTranslation } from "react-i18next";

import { Button, Col, Form, Input, Row } from "antd";

import { LoginProps } from "./container/Login.Container";

const Login = ({ loading, login }: LoginProps) => {

  const { t } = useTranslation();
  const [form] = Form.useForm();


  const onFinish = () => {

    const { CLIENT_USERNAME, CLIENT_PASSWORD } = form.getFieldsValue();

    login({
      CLIENT_USERNAME: CLIENT_USERNAME,
      CLIENT_PASSWORD: CLIENT_PASSWORD,
    });
  };

  return (
    <Row className="authentication-login">
      <Col xs={24} md={24} lg={24} className="authentication-left">
        <Form layout="vertical" onFinish={onFinish} form={form} >
          <Row className="flex-column">
            <Col xs={24} md={12} lg={24}>
              <Form.Item
                label={t("label.userName")}
                name="CLIENT_USERNAME"
                hasFeedback
                rules={[
                  { required: true, message: t("required.phoneField") },
                ]}
              >
                <Input id="username" autoFocus={true} placeholder={t("label.userName")} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={24}>
              <Form.Item
                label={t("label.password")}
                name="CLIENT_PASSWORD"
                hasFeedback
                rules={[{ required: true, message: t("required.passwordField") }]}
              >
                <Input.Password data-testid="passwordInput" autoComplete="off" maxLength={6} type="password" placeholder={t("label.password")} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={24} className="mt-12">
              <Form.Item>
                <Button data-testid="loginButton" type="primary" htmlType="submit" block loading={loading}>
                  {t("button.login")}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;