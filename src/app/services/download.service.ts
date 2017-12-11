import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MediaSource } from '../models/media-source';
import { DownloadInfo } from '../models/download-info';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DownloadService extends HttpApiService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(http:HttpClient) 
  {
    super(http, 'http://localhost:5000/jadeflix/api');
    //super(http,'https://192.168.1.130/jadeflix/api');
  }

  download(id:string, group:string, kind:string ,name:string, file: string, url: string): Promise<MediaSource[]> {
    const route = `download?id=${id}&group=${group}&kind=${kind}&name=${encodeURIComponent(name)}&url=${url}&file=${encodeURIComponent(file)}`;
    
    return this.apiCall(route)
      .then(response=>{
        var entry = response as MediaSource[]; 
        return entry;
      });
  };

  getActiveDownloads(): Promise<DownloadInfo[]> {
    const route = `getActiveDownloads`;
    
    return this.apiCall(route)
      .then(response=>{
        var entry = response as DownloadInfo[]; 
        return entry;
      });
  };
}
