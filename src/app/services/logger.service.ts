import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { 

  }
  Info(log:string){
    console.log(log);
  }
}
