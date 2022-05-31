import { environment } from 'src/environments/environment';

export const getResourceURI = (resourceURI: string) => {
  const uri = verifyURI(resourceURI);
  return `${uri}?apikey=${environment.apiKey}`;
};

export const getResourceURIWithParams = (resourceURI: string) => {
  const uri = verifyURI(resourceURI);
  return `${uri}&apikey=${environment.apiKey}`;
};

const verifyURI = (resourceURI: string): string => {
  return resourceURI.includes('https')
    ? resourceURI
    : resourceURI.replace('http', 'https');
};
