import React from "react";

import "./styles.less";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";


type BoxCharacterContentProps = {
  name: string
  status: string | null
  species?: string
  gender?: string
  type?: string
  imageSource?: string
  originLocation?: string
  actualLocation?: string
  moreInfo?: string
  loading?: boolean
};

const BoxCharacterContent = ({
  name,
  status,
  species,
  gender,
  type,
  imageSource,
  originLocation,
  actualLocation,
  moreInfo,
}: BoxCharacterContentProps) => {
  return (
    <Col className="flex justifyCenter" xs={24} sm={12} md={12} lg={8} xl={8}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={imageSource} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
    </Col>
    /*  <div className="box">
      <img className="box-image" alt={name} src={imageSource} />
      <div className="description">
        <div className="description__left">
          <p>
            <Link className="name" to={`/characters/?q=${name}`}>
              {name}
            </Link>
          </p>
          <p>
            {status} - {species}
          </p>
          <p>{gender}</p>
          <p>{type}</p>
        </div>
        <div className="description__right">
          <p>Origin: {originLocation}</p>
          <p>Location: {actualLocation}</p>
        </div>
        <div className="more-info">
          <a className="more-info" href={moreInfo}>
            More Info
          </a>
        </div>
      </div>
    </div> */
  );
};

export default BoxCharacterContent;
