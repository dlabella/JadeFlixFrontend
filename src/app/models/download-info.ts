export class DownloadInfo {
	public id: string;
	public name: string;
	public file: string;
	public source: string;
	public bytesTotal: number;
	public bytesReceived: number;
	public bytesTransfered: number;
	public timeSpent: Date;
	public isEmpty: boolean;
	public isCompleted: boolean;
	public isQueued: boolean;
	public percentCompleted:number;
}
