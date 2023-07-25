import React, { CSSProperties } from "react";

import { Typography } from "antd";

type Level = 1 | 2 | 3 | 4 | 5;

type LabelProps = {
  children: React.ReactNode;
  level: Level;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
};

const Label = ({ children, level, style, onClick, className }: LabelProps) => {

  return (
    <Typography.Title style={style} className={`${className} text-label`} level={level} onClick={onClick}>
      {children}
    </Typography.Title>
  );
};

export default Label;