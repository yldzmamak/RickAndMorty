import React from "react";

import { Empty, EmptyProps } from "antd";

const emptyImage = require("@/assets/icons/empty-icon.svg") as string;


type EmptyGlobalProps = EmptyProps & {
  width?: number;
  height?: number;
};

const EmptyGlobal = ({ width, height, description, image, className }: EmptyGlobalProps) => {
  return (
    <Empty
      className={className}
      image={image || emptyImage}
      imageStyle={{
        width: width || 40,
        height: height || 40
      }}
      description={description}
    />
  );
};

export default React.memo(EmptyGlobal);