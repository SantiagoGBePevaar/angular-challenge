import { Thumbnail, Url } from './shared_models';

export interface Serie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
}
