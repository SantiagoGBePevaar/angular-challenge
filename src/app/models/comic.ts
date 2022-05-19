import { Events, Stories, Thumbnail, Url } from './shared_models';

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Date {
  type: string;
  date: any;
}

interface Price {
  type: string;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: Creator[];
  returned: number;
}

interface Character {
  resourceURI: string;
  name: string;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: any;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: any[];
  collectedIssues: any[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
