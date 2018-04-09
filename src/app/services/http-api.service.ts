import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpApiService {

	constructor(protected http: HttpClient, protected baseApiUrl: string) {
	}

	protected apiGetCall(route: string): Observable<any> {
    var apiUrl = this.getApiUrl(route)
    return this.http.get(apiUrl,{
      headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'}
    })
    .catch(this.handleError);
	}

	protected apiPostCall(route: string, body: any): Observable<any> {
    var apiUrl = this.getApiUrl(route);
		return this.http.post(apiUrl, body, {
			headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      }
		}).catch(this.handleError);
	}

	private getApiUrl(route: string): string {
		let basePart: string;
		let routePart: string;

		basePart = this.baseApiUrl;
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
