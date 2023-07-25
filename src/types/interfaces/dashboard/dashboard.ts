export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: IINameUrl;
  location: IINameUrl;
  url: string;
  created: string;
}

export interface IINameUrl {
  name: string;
  url: string;
}
