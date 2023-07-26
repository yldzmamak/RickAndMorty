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
