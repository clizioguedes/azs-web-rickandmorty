export interface Origin {
  name: string;
  url: string;
}

export interface Location extends Origin {}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
