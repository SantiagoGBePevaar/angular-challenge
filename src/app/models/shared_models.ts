export interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface GenericData<T> {
  available: number;
  collectionURI: string;
  items: T[];
  returned: number;
}

export interface Data {
  resourceURI: string;
  name: string;
}

export interface DataRole {
  resourceURI: string;
  name: string;
  role: string;
}

export interface DataType {
  resourceURI: string;
  name: string;
  type: string;
}