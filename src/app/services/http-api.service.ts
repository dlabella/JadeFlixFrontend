//import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from 'os';

export class HttpApiService {
  _http:HttpClient;
  _baseApiUrl: string;

	constructor(
    http: HttpClient,
    baseApiUrl: string) {
			this._http=http;
			let origin = window.location.origin;
      this._baseApiUrl=baseApiUrl.replace("{0}", origin);
	}

  protected apiGetCall(route: string): Observable<object> {
    var apiUrl = this.getApiUrl(route)
    return this._http.get(apiUrl,{
      headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'}
    });
    //.pipe(catchError(this.handleError));
	}

	protected apiPostCall(route: string, body: object): Observable<object> {
    var apiUrl = this.getApiUrl(route);
		return this._http.post(apiUrl, body, {
			headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      }
    });
    //.pipe(catchError(this.handleError));
  }

	private getApiUrl(route: string): string {
		let basePart: string;
		let routePart: string;

		basePart = this._baseApiUrl;
		routePart = route;

		if (basePart.endsWith('/')) {
			basePart = basePart.slice(0, -1);
		}

		if (routePart.startsWith('/')) {
			routePart = route.substr(1);
		}
		console.log("Requesting: " + basePart + "/" + routePart);
		return basePart + "/" + routePart;
	}

	protected handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
