import { ICharacter, IEpisode } from "./dashboard";
import { IGlobalAPIResponse, IStateMisc } from "../../global";

interface IEpisodeState extends IStateMisc {
  data: IGlobalAPIResponse<IEpisode[]>;
}

export interface IEpisodeDetailState<T> extends IStateMisc {
  data: T;
}

export interface ICommonState {
  episodeList: IEpisodeState;
  episode: IEpisodeDetailState<IEpisode>;
  characterList: IEpisodeDetailState<ICharacter[]>;
}
