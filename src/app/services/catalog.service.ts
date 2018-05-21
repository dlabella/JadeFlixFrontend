
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { HttpApiService } from './http-api.service';
import { CatalogItem } from '../models/catalog-item';
import { MediaSource } from '../models/media-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class CatalogService extends HttpApiService {

  constructor
  (protected http: HttpClient) {
    super(http, environment.jadeflixApiUrl);
  }

  getRecent(provider: string): Observable<CatalogItem[]> {
    const route = `getRecent/${provider}`;
    return this.apiGetCall(route).pipe(
      map(res => {
        return res as CatalogItem[];
      }));
  }

  getLocal(group: string, kind: string): Observable<CatalogItem[]> {
    const route = `getLocal/${group}/${kind}`;
      return this.apiGetCall(route).pipe(
        map(res => {
          return res as CatalogItem[];
        }));
  }

  getItem(provider: string, group: string, kind: string, name: string, id: string, force:boolean): Observable<CatalogItem> {

  const route = `getItem/${provider}/${group}/${kind}/${name}/${id}?nocache=${force}`;
    return this.apiGetCall(route).pipe(
      map(res => {
        const entry = res as CatalogItem;
          console.log('Response Entry: ' + entry);
          return entry;
        }));
  }

  postItem(item: CatalogItem): Observable<any> {
    const route = `postItem`;
      return this.apiPostCall(route, item);
  }

  findItem(provider: string, name: string): Observable<CatalogItem[]> {
    const route = `findItem/${provider}/${name}`;
      return this.apiGetCall(route).pipe(
        map(res => {
          const entry = res as CatalogItem[];
          console.log('Response Entry: ' + entry);
          return entry;
      }));
  }

  getMedia(provider: string, uid: string): Observable<MediaSource[]> {
    const route = `getmedia/${provider}/${uid}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        const entry = response as MediaSource[];
        return entry;
      }));
  }

  getMediaUrl(provider: string, uid: string): Observable<MediaSource> {
    const route = `getmediaurl/${provider}/${uid}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        const source = response as MediaSource;
        return source;
      }));
  }
}
