import { IStore } from "@/store/IStore";


export const getEpisodeList = (state: IStore) => {
	return state.common.episodeList;
};

export const getEpisodeDetail = (state: IStore) => {
	return state.common.episode;
};

export const getCharacterList = (state: IStore) => {
	return state.common.characterList;
};

export const getCharacterSearchName = (state: IStore) => {
	return state.common.characterSearchName;
};

export const getCharacterStatus = (state: IStore) => {
	return state.common.characterStatus;
};

export const getCharacterSpecies = (state: IStore) => {
	return state.common.characterSpecies;
};

export const getCharacterGender = (state: IStore) => {
	return state.common.characterGender;
};
