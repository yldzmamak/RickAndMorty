import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Row } from "antd";

import {
  CommonActions,
  getCharacterList,
  getCharacterSearchName,
  getEpisodeDetail,
} from "@/features/common";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";
import { ICharacter } from "@/types/interfaces/dashboard/dashboard";

import BoxCharacterContent from "./components/BoxCharacterContent";
import EpisodeHeader from "./components/EpisodeHeader";

type MyArrayType = ICharacter[];

const EpisodeDetail = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [characters, setCharacters] = useState<MyArrayType>([]);

  const { episode, characterList, characterSearchName } = useAppSelector(
    (state: IStore) => ({
      episode: getEpisodeDetail(state),
      characterList: getCharacterList(state),
      characterSearchName: getCharacterSearchName(state),
    }),
  );

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

  React.useEffect(() => {
    if (characterList.data) {
      setCharacters(characterList.data);
    }
  }, [characterList.data]);

  React.useEffect(() => {
      setCharacters(
        characterList?.data?.filter((character) =>
          character.name
            .toLowerCase()
            .includes(characterSearchName.toLowerCase()),
        ),
      );
  }, [characterSearchName]);

  const extractIdFromUrl = (url: string) => {
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 1]; // Get the last part, which should be the ID
    return id;
  };

  return (
    <>
      <EpisodeHeader></EpisodeHeader>
      <Row gutter={[16, 16]}>
        {characters?.map((character) => (
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
