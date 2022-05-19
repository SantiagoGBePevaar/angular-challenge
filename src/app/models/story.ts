import { DataRole, GenericData, Thumbnail } from './shared_models';

import { Data } from '@angular/router';

export interface Story {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail;
  creators: GenericData<DataRole>;
  characters: GenericData<DataRole>;
  series: GenericData<Data>;
  comics: GenericData<Data>;
  events: GenericData<Data>;
  originalIssue: Data;
}
