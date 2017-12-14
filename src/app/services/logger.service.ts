import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

	Info(log: string) {
		console.log(log);
	}

}
