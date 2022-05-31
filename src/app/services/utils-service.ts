import { environment } from 'src/environments/environment';

export const getResourceURI = (resourceURI: string) => {
  return `${resourceURI}?apikey=${environment.apiKey}`;
};

export const getResourceURIWithParams = (resourceURI: string) => {
  return `${resourceURI}&apikey=${environment.apiKey}`;
};
