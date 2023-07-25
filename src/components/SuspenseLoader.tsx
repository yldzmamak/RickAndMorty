import React from "react";

import { Spin } from "antd";

type WrappedLoader = {
  className?: string;
  indicator?: React.ReactElement<HTMLElement>;
  spinning?: boolean;
};

const WrappedLoader = ({ className, indicator, spinning }: WrappedLoader) => (
  <Spin spinning={spinning} className={`suspense loading ${className}`} indicator={indicator} />
);

export default WrappedLoader;