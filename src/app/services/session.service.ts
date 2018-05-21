
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SessionResponse } from '../models/session-response';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Base64 } from '../../app/core/base64';

@Injectable()
export class SessionService extends HttpApiService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private sessionId = '';
  private base64: Base64;
  constructor(protected http: HttpClient) {
      super(http, environment.jadeflixApiUrl);
      this.sessionId = "jadeflixApp";
      this.base64=new Base64();
  }

  set(key: string, value: any): Observable<any> {
    //const data = this.base64.encode(JSON.stringify(value));
    const route = `session?sessionId=${this.sessionId}&key=${key}`;

    return this.apiPostCall(route, value).pipe(
      map(response => {
        return response;
      }));
  }

  get<T>(key: string): Observable<T> {
    const route = `session?sessionId=${this.sessionId}&key=${key}`;

    return this.apiGetCall(route).pipe(
      map(response => {
          const entry = response as SessionResponse;
          const data = JSON.parse(entry.result) as T;
          return data;
      }));
  }
}
