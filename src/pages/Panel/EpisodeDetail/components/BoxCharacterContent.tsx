import React from "react";

import { Card, Col, Tag } from "antd";
import Meta from "antd/lib/card/Meta";

import { Typography } from "@/components/UI";

type BoxCharacterContentProps = {
  name: string
  status: string | null
  species?: string
  imageSource?: string
  actualLocation?: string
};

const BoxCharacterContent = ({
  name,
  status,
  species,
  imageSource,
  actualLocation,
}: BoxCharacterContentProps) => {
  return (
    <Col
      className="flex justifyCenter character-box"
      xs={24}
      sm={12}
      md={12}
      lg={8}
      xl={8}
    >
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={imageSource} />}
      >
        <Tag
          color={status === "Alive" ? "success" : "error"}
          className="alive-tag"
        >
          {status}
        </Tag>
        <Typography.H level={2} style={{ width: "max-content" }}>
          {name}
        </Typography.H>

        <Meta title={`${species}`} description={`${actualLocation}`} />
      </Card>
    </Col>
  );
};

export default BoxCharacterContent;
