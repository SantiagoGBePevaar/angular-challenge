import { Data, DataType, GenericData, Thumbnail, Url } from './shared_models';

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: GenericData<Data>;
  series: GenericData<Data>;
  stories: GenericData<DataType>;
  events: GenericData<Data>;
  urls: Url[];
}
