import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MediaSource } from '../models/media-source';
import { DownloadInfo } from '../models/download-info';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DownloadService extends HttpApiService {

	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(http: HttpClient) {
		super(http, environment.jadeflixApiUrl);
	}

	download(id: string, group: string, kind: string, name: string, file: string, url: string): Observable<MediaSource[]> {
		const route = `download?id=${id}&group=${group}&kind=${kind}&name=${encodeURIComponent(name)}&url=${url}&file=${encodeURIComponent(file)}`;

		return this.apiCall(route)
			.map(response => {
				var entry = response as MediaSource[];
				return entry;
			});
	};

	batchDownload(provider:string, group: string, kind: string, uid: string): Observable<string> {
		const route = `batchDownload?scraper=${provider}&group=${group}&kind=${kind}&uid=${uid}`;

		return this.apiCall(route)
			.map(response => {
				var entry = response as string;
				return entry;
			});
	};

	getActiveDownloads(): Observable<DownloadInfo[]> {
		const route = `getActiveDownloads`;

		return this.apiCall(route)
			.map(response => {
				var entry = response as DownloadInfo[];
				return entry;
			});
	};
}
