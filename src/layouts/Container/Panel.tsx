import React from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";

import { selectDeviceType } from "@/features/system/systemSelectors";
import { useAppSelector } from "@/hooks/useStore";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { IStore } from "@/store/IStore";

const Panel = (): JSX.Element => {

  const { device: { device } } = useAppSelector((state: IStore) => ({
    device: selectDeviceType(state),
  }));

  return (
    <Layout hasSider className={`fadeIn layout-wrapper ${device === "DESKTOP" && "desktop"}`}>
      <Layout>
        <Header />
        <Layout.Content>
          <Outlet></Outlet>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Panel;