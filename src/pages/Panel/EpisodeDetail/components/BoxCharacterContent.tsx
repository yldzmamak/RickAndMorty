import React from "react";

import { Card, Col, Tag } from "antd";
import Meta from "antd/lib/card/Meta";

import WrappedLoader from "@/components/SuspenseLoader";
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
      md={8}
      lg={6}
      xl={6}
    >
      <React.Suspense fallback={<WrappedLoader />}>
        <Card cover={<img alt="example" src={imageSource} />}>
          <Tag
            color={status === "Alive" ? "success" : "error"}
            className="alive-tag"
          >
            {status}
          </Tag>
          <Typography.H level={2}>{name}</Typography.H>

          <Meta title={`${species}`} description={`${actualLocation}`} />
        </Card>{" "}
      </React.Suspense>
    </Col>
  );
};

export default BoxCharacterContent;
