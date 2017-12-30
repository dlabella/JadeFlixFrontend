import { Component, Input } from '@angular/core';
import { DownloadInfo } from '../../models/download-info';

@Component({
	selector: 'download-card',
	templateUrl: './download-card.component.html',
	styleUrls: ['./download-card.component.css']
})
export class DownloadCardComponent {
	@Input() download:DownloadInfo;
	constructor() {
		let d = this.download;
	 }
}
