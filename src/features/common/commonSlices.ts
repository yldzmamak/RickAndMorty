import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IGlobalAPIResponse, IStateMisc } from "@/types/global";
import { ICharacter, IEpisode } from "@/types/interfaces/dashboard/dashboard";
import { ICommonState } from "@/types/interfaces/dashboard/dashboard-state";

const stateMisc: IStateMisc = {
  loading: false,
  error: null,
};

const initialState: ICommonState = {
  episodeList: {
    data: {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: "",
        prev: "",
      },
    },
    ...stateMisc,
  },
  episode: {
    data: {
      id: 0,
      name: "",
      air_date: "",
      episode: "",
      characters: [],
    },
    ...stateMisc,
  },
  characterList: {
    data: [],
    ...stateMisc,
  },
  characterSearchName: "",
  characterStatus: "",
  characterSpecies: "",
  characterGender: ""
};

const commonSlices = createSlice({
  name: "Common",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getEpisodeList (state, action: PayloadAction<number>) {
      state.episodeList.loading = true;
    },
    getEpisodeListSuccess (
      state,
      action: PayloadAction<IGlobalAPIResponse<IEpisode[]>>,
    ) {
      state.episodeList.loading = false;
      action.payload.results = [
        ...state.episodeList.data.results,
        ...action.payload.results,
      ];
      state.episodeList.data = action.payload;
    },
    getEpisodeListError (
      state,
      action: PayloadAction<IGlobalAPIResponse<IEpisode[]>>,
    ) {
      state.episodeList.loading = false;
      state.episodeList.error = action.payload.results;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getEpisode (state, action: PayloadAction<string>) {
      state.episode.loading = true;
    },
    getEpisodeSuccess (state, action: PayloadAction<IEpisode>,
    ) {
      state.episode.loading = false;
      state.episode.data = action.payload;
    },
    getEpisodeError (state, action: PayloadAction<IGlobalAPIResponse<IEpisode>>,
    ) {
      state.episode.loading = false;
      state.episode.error = action.payload.results;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCharacterList (state, action: PayloadAction<string[]>) {
      state.characterList.loading = true;
    },
    getCharacterListSuccess (state, action: PayloadAction<ICharacter[]>,
    ) {
      state.characterList.loading = false;
      state.characterList.data = action.payload;
    },
    getCharacterListError (state, action: PayloadAction<IGlobalAPIResponse<ICharacter>>,
    ) {
      state.characterList.loading = false;
      state.characterList.error = action.payload.results;
    },

    setCharacterSearchName (state, action: PayloadAction<string>) {
      state.characterSearchName !== action.payload ? state.characterSearchName = action.payload : null;
    },

    setCharacterStatus (state, action: PayloadAction<string>) {
      state.characterStatus !== action.payload ? state.characterStatus = action.payload : null;
    },

    setCharacterSpecies (state, action: PayloadAction<string>) {
      state.characterSpecies !== action.payload ? state.characterSpecies = action.payload : null;
    },

    setCharacterGender (state, action: PayloadAction<string>) {
      state.characterGender !== action.payload ? state.characterGender = action.payload : null;
    },
  },
});

export const CommonActions = commonSlices.actions;

export default commonSlices.reducer;
