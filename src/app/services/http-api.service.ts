import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpApiService {

  constructor(protected http: HttpClient, protected baseApiUrl:string) { 

  }
  
  protected apiCall(route:string): Promise<any>{
    return this.http.get(this.getApiUrl(route))
    .toPromise()
    .catch(this.handleError);
  }

  private getApiUrl(route:string){
    let basePart:string;
    let routePart:string;

    basePart=this.baseApiUrl;
    routePart=route;

    if (basePart.endsWith('/')){
      basePart=basePart.slice(0,-1);
    }

    if (routePart.startsWith('/')){
      routePart=route.substr(1);
    }
    console.log("Requesting: "+basePart+"/"+routePart);
    return basePart+"/"+routePart;
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
