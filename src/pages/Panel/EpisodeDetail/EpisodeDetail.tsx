import React from "react";
import { useParams } from "react-router-dom";

import { Row } from "antd";

import {
  CommonActions,
  getCharacterList,
  getEpisodeDetail,
} from "@/features/common";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";

import BoxCharacterContent from "./components/BoxCharacterContent";
import EpisodeTitle from "./components/EpisodeTitle";

const EpisodeDetail = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { episode, characterList } = useAppSelector((state: IStore) => ({
    episode: getEpisodeDetail(state),
    characterList: getCharacterList(state),
  }));

  React.useEffect(() => {
    if (params.episodeId) {
      dispatch(CommonActions.getEpisode(params.episodeId));
    }
  }, [params.episodeId]);

  React.useEffect(() => {
    if (episode?.data?.characters.length > 0) {
      const ids = episode.data?.characters?.map((url) => extractIdFromUrl(url));
      dispatch(CommonActions.getCharacterList(ids));
    }
  }, [episode?.data?.characters]);

  const extractIdFromUrl = (url: string) => {
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 1]; // Get the last part, which should be the ID
    return id;
  };

  return (
    <>
    <EpisodeTitle></EpisodeTitle>
    <Row gutter={[16, 16]}>
      {characterList?.data?.map((character) => (
        <BoxCharacterContent
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          imageSource={character.image}
          actualLocation={character.location.name}
        />
      ))}
    </Row>
    </>
  );
};

export default EpisodeDetail;
