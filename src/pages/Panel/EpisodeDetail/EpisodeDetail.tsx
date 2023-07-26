import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Col, Row } from "antd";

import { EmptyGlobal } from "@/components/UI";
import {
  CommonActions,
  getCharacterGender,
  getCharacterList,
  getCharacterSearchName,
  getCharacterSpecies,
  getCharacterStatus,
  getEpisodeDetail,
} from "@/features/common";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { IStore } from "@/store/IStore";
import { ICharacter } from "@/types/interfaces/dashboard/dashboard";

import BoxCharacterContent from "./components/BoxCharacterContent";
import EpisodeHeader from "./components/EpisodeHeader";
import FilterCollapse from "./components/FilterCollapse";

type MyArrayType = ICharacter[];

const EpisodeDetail = (): JSX.Element => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const params = useParams();
  const [characters, setCharacters] = useState<MyArrayType>([]);

  const {
    episode,
    characterList,
    characterSearchName,
    characterStatus,
    characterSpecies,
    characterGender,
  } = useAppSelector((state: IStore) => ({
    episode: getEpisodeDetail(state),
    characterList: getCharacterList(state),
    characterSearchName: getCharacterSearchName(state),
    characterStatus: getCharacterStatus(state),
    characterSpecies: getCharacterSpecies(state),
    characterGender: getCharacterGender(state),
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

  React.useEffect(() => {
    if (characterList.data) {
      setCharacters(characterList.data);
    }
  }, [characterList.data]);

  React.useEffect(() => {
    const filter = {
      status: characterStatus,
      species: characterSpecies,
      gender: characterGender,
    };

    setCharacters(
      characterList?.data
        ?.filter((character) =>
          character.name
            .toLowerCase()
            .includes(characterSearchName.toLowerCase()),
        )
        .filter((item: ICharacter) => {
          return (
            item.gender.toLowerCase().includes(filter.gender.toLowerCase()) &&
            item.status.toLowerCase().includes(filter.status.toLowerCase()) &&
            item.species.toLowerCase().includes(filter.species.toLowerCase())
          );
        }),
    );
  }, [characterSearchName, characterStatus, characterSpecies, characterGender]);

  const extractIdFromUrl = (url: string) => {
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 1]; // Get the last part, which should be the ID
    return id;
  };

  return (
    <>
      <EpisodeHeader></EpisodeHeader>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={24} lg={6}>
          <FilterCollapse />
        </Col>
        <Col xs={24} md={24} lg={18}>
          {characters.length > 0 ? (
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
          ) : (
            <EmptyGlobal
              description={t("messages.noTransactionFound")}
              className=""
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default EpisodeDetail;
