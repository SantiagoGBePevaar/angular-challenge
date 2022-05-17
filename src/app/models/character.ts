interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicSummary[];
  returned: number;
}

interface EventSummary {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: EventSummary[];
  returned: number;
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StorySummary[];
  returned: number;
}

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: SeriesSummary[];
  returned: number;
}

interface Url {
  type: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}
