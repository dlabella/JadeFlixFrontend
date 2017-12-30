import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HttpApiService } from './http-api.service';
import { CatalogItem } from '../models/catalog-item';
import { MediaSource } from '../models/media-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class CatalogService extends HttpApiService {

	constructor(http: HttpClient) {
		super(http, environment.jadeflixApiUrl);
	}

	getRecent(provider: string): Observable<CatalogItem[]> {
		const route = `getRecent/${provider}`;
		return this.apiCall(route)
			.map(res => {
				return res as CatalogItem[];
			});
	};

	getLocal(group:string,kind:string): Observable<CatalogItem[]> {
		const route = `getLocal/${group}/${kind}`;
		return this.apiCall(route)
			.map(res => {
				return res as CatalogItem[];
			});
	};

	getItem(provider: string, group: string, kind: string, name: string, id: string): Observable<CatalogItem> {
		const route = `getItem/${provider}/${group}/${kind}/${name}/${id}`;
		return this.apiCall(route)
			.map(res => {
				var entry = res as CatalogItem;
				console.log("Response Entry: " + entry);
				return entry;
			});
	};

	findItem(provider: string, name: string): Observable<CatalogItem[]> {
		const route = `findItem/${provider}/${name}`;
		return this.apiCall(route)
			.map(res => {
				var entry = res as CatalogItem[];
				console.log("Response Entry: " + entry);
				return entry;
			});
	};

	getMedia(provider: string, uid: string): Observable<MediaSource[]> {
		const route = `getmedia/${provider}/${uid}`;
		return this.apiCall(route)
			.map(response => {
				var entry = response as MediaSource[];
				return entry;
			});
	};

	getMediaUrl(provider: string, uid: string): Observable<MediaSource> {
		const route = `getmediaurl/${provider}/${uid}`;
		return this.apiCall(route)
			.map(response => {
				var source = response as MediaSource;
				return source;
			});
	};

}