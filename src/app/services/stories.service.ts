import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../models/story';
import { environment } from './../../environments/environment';
import { getResourceURI } from './utils-service';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private API_STORIES = `https://gateway.marvel.com/v1/public/stories&apikey=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  public getStory(resourceURI: string): Observable<Story> {
    const uri = getResourceURI(resourceURI);
    return this.http
      .get(uri)
      .pipe(map<any, Story>((data: any) => data.data.results[0]));
  }
}
