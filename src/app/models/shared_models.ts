export interface Url {
  type: string;
  url: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StorySummary[];
  returned: number;
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
