import React from "react";
import { useTranslation } from "react-i18next";

import { Col, Row } from "antd";

import { Typography } from "@/components/UI";
import { getEpisodeDetail } from "@/features/common";
import { useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";

import Search from "./Search";

const EpisodeHeader = () => {
  const { t } = useTranslation();

  const { episode } = useAppSelector((state: IStore) => ({
    episode: getEpisodeDetail(state),
  }));

  return (
    <Row className="episode-detail-header">
      <Col xs={24} md={12} lg={12}>
        <Typography.H level={2}>{`${t("label.episodeName")}: ${
          episode.data.name
        }`}</Typography.H>
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Search></Search>
      </Col>
    </Row>
  );
};

export default EpisodeHeader;
