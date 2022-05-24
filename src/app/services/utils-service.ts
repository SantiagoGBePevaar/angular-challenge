import { environment } from 'src/environments/environment';

export const getResourceURI = (resourceURI: string) => {
  return `${resourceURI.replace('http', 'https')}?apikey=${environment.apiKey}`;
};
