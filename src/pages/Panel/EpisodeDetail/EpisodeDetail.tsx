import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import {
  CommonActions,
  getCharacterList,
  getEpisodeDetail,
} from "@/features/common";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";

import BoxCharacterContent from "./components/BoxCharacterContent";

const EpisodeDetail = (): JSX.Element => {
  const { t } = useTranslation();
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
    if (episode.data.characters) {
      const ids = episode.data.characters.map((url) => extractIdFromUrl(url));
      dispatch(CommonActions.getCharacterList(ids));
    }
  }, [episode.data.characters]);

  const extractIdFromUrl = (url: string) => {
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 1]; // Get the last part, which should be the ID
    return id;
  };

  return (
    <section className="grid">
      {characterList?.data?.map((image) => (
        <BoxCharacterContent
          key={image.id}
          name={image.name}
          status={image.status}
          species={image.species}
          gender={image.gender}
          type={image.type}
          imageSource={image.image}
          originLocation={image.origin.name}
          actualLocation={image.location.name}
          moreInfo={image.url}
        />
      ))}
    </section>
  );
};

export default EpisodeDetail;
