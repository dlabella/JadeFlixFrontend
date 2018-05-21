
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';



import { MediaSource } from '../models/media-source';
import { DownloadInfo } from '../models/download-info';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class DownloadService extends HttpApiService {

	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(protected http: HttpClient) {
		super(http, environment.jadeflixApiUrl);
	}

	download(id: string, group: string, kind: string, name: string, file: string, url: string): Observable<MediaSource[]> {
		const route = `download?id=${encodeURIComponent(id)}&group=${group}&kind=${kind}&name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}&file=${encodeURIComponent(file)}`;

		return this.apiGetCall(route).pipe(
			map(response => {
				var entry = response as MediaSource[];
				return entry;
			}));
	};

	batchDownload(provider:string, group: string, kind: string, uid: string): Observable<any> {
		const route = `batchDownload?scraper=${provider}&group=${group}&kind=${kind}&uid=${uid}`;

		return this.apiGetCall(route);
	};

	getDownloads(): Observable<DownloadInfo[]> {
		const route = `getDownloads`;
		return this.apiGetCall(route).pipe(
			map(response => {
				var entry = response as DownloadInfo[];
				return entry;
			}));
	};
}
