import { Injectable } from '@angular/core';
import { SessionResponse } from '../models/session-response';
import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Base64 } from '../../app/core/base64';

@Injectable()
export class SessionService extends HttpApiService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private sessionId = '';
  private base64: Base64;
  constructor(http: HttpClient) {
      super(http, environment.jadeflixApiUrl);
      this.sessionId = "jadeflixApp";
      this.base64=new Base64();
  }

  set(key: string, value: any): Observable<any> {
    const data = this.base64.encode(JSON.stringify(value));
    const route = `session?sessionId=${this.sessionId}&key=${key}&value=${data}`;

    return this.apiGetCall(route)
      .map(response => {
        return response;
      });
  }

  get<T>(key: string): Observable<T> {
    const route = `session?sessionId=${this.sessionId}&key=${key}`;

    return this.apiGetCall(route)
      .map(response => {
          const entry = response as SessionResponse;
          const data = JSON.parse(this.base64.decode(entry.result)) as T;
          return data;
      });
  }
}
