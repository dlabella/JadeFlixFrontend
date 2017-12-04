import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HttpApiService } from './http-api.service';
import { CatalogItem } from '../models/catalog-item';
import { MediaSource } from '../models/media-source';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatalogService extends HttpApiService {

  //private headers = new Headers({'Content-Type': 'application/json'});

  constructor(http: HttpClient) {
    super(http, 'http://localhost:5000/jadeflix/api');
    //super(http, 'https://192.168.1.130/jadeflix/api');
 }

  getRecent(provider: string): Promise<CatalogItem[]> {
    const route = `getRecent/${provider}`;
    return this.apiCall(route)
      .then(response => {
        return response as CatalogItem[]; 
      });
  };

  getItem(provider: string, kind: string, group:string, name:string, id: string): Promise<CatalogItem> {
    const route = `getItem/${provider}/${kind}/${group}/${name}/${id}`;
    return this.apiCall(route)
      .then(response => { 
        var entry = response as CatalogItem;
        console.log("Response Entry: "+entry);
        return entry;
      });
  };

  getMedia(provider: string, uid: string): Promise<MediaSource[]> {
    const route = `getmedia/${provider}/${uid}`;
    return this.apiCall(route)
      .then(response => { 
        var entry = response as MediaSource[]; 
        return entry;
      });
  };

  getMediaUrl(provider: string, uid: string): Promise<MediaSource> {
    const route = `getmediaurl/${provider}/${uid}`;
    return this.apiCall(route)
      .then(response => {
        var source = response as MediaSource;
        return (source);
      });
  };

}