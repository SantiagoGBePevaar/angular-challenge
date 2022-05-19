import {
  Data,
  DataRole,
  DataType,
  GenericData,
  Thumbnail,
  Url,
} from './shared_models';

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
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
  series: Data;
  variants: Data[];
  collections: any[];
  collectedIssues: Data[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: GenericData<DataRole>;
  characters: GenericData<Data>;
  stories: GenericData<DataType>;
  events: GenericData<Data>;
}

interface DateElement {
  type: string;
  date: Date;
}

interface Price {
  type: string;
  price: number;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}
