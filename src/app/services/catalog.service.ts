import { CatalogItem } from './../models/catalog-item';
import { element } from 'protractor';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { HttpApiService } from './http-api.service';
import { MediaSource } from '../models/media-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Injectable()
export class CatalogService extends HttpApiService {
  constructor
  (protected http: HttpClient) {
    super(http, environment.jadeflixApiUrl);
  }

  getRecent(provider: string): Observable<CatalogItem[]> {
    const route = `getRecent/${provider}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        return response as CatalogItem[];
      }));
  }

  getLocal(group: string, kind: string): Observable<CatalogItem[]> {
    const route = `getLocal/${group}/${kind}`;
      return this.apiGetCall(route).pipe(
        map(response => {
          return response as CatalogItem[];
        }));
  }

  getItem(provider: string, group: string, kind: string, name: string, id: string, force:boolean): Observable<CatalogItem> {

  const route = `getItem/${provider}/${group}/${kind}/${name}/${id}?nocache=${force}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        return response as CatalogItem;
      }));
  }

  postItem(item: CatalogItem): Observable<any> {
    const route = `postItem`;
      return this.apiPostCall(route, item);
  }

  findItem(provider: string, name: string): Observable<CatalogItem[]> {
    const route = `findItem/${provider}/${name}`;
      return this.apiGetCall(route).pipe(
        map(response => {
          return response as CatalogItem[];
      }));
  }

  getMedia(provider: string, uid: string): Observable<MediaSource[]> {
    const route = `getmedia/${provider}/${uid}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        return response as MediaSource[];
      }));
  }

  getMediaUrl(provider: string, uid: string): Observable<MediaSource> {
    const route = `getmediaurl/${provider}/${uid}`;
    return this.apiGetCall(route).pipe(
      map(response => {
        return response as MediaSource;
      }));
  }
}
