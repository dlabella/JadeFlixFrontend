import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private map:Map<string,any>=new Map<string,any>();
  
  public set<T>(key:string,value:T):void{
      this.map.set(key,value);
  }

  public get<T>(key:string):any{
    return this.map.get(key) as T;
  }

}
