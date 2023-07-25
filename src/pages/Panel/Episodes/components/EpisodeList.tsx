import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button, Divider, List, Skeleton } from "antd";
import moment from "moment";

import { getEpisodeList } from "@/features/common/commonSelectors";
import { CommonActions } from "@/features/common/commonSlices";
import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { IStore } from "@/store/IStore";
import { pathNames } from "@/types/constants/common";
import { IEpisode } from "@/types/interfaces/dashboard/dashboard";

const count = 20;

const EpisodeList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { episodeList } = useAppSelector((state: IStore) => ({
    episodeList: getEpisodeList(state),
  }));

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IEpisode[]>([]);
  const [list, setList] = useState<IEpisode[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setInitLoading(false);
    setData(episodeList.data.results);
    setList(episodeList.data.results);
  }, [episodeList]);

  React.useEffect(() => {
    dispatch(CommonActions.getEpisodeList(page));
  }, []);

  const onLoadMore = () => {
    setPage(page + 1);

    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          id: 0,
          air_date: "",
          episode: "",
          characters: [],
          name: "",
        })),
      ),
    );
    dispatch(CommonActions.getEpisodeList(page + 1));
    const newData = data.concat(episodeList.data.results);
    setData(newData);
    setList(newData);
    setLoading(false);
  };

  const loadMore = !episodeList.data.info.next ? (
    <Divider plain>{t("label.endMessage")}</Divider>
  ) : !initLoading && !loading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>{t("label.loadingMore")}</Button>
    </div>
  ) : null;

  return (
    <List
      className="episode-list"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              key="list-loadmore-more"
              type="link"
              className="p-0"
              onClick={() => navigate(`${pathNames.episodesPage}/${item.id}`)}
            >
              {t("button.more")}
            </Button>,
          ]}
          className="episode-item"
        >
          <Skeleton avatar title={false} loading={episodeList.loading} active>
            <List.Item.Meta
              title={item.name}
              description={moment(item.air_date).format("Do MMMM YYYY")}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default EpisodeList;
