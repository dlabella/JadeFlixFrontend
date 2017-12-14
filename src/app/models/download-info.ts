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
	public get percentCompleted(): number {
		if (this.bytesTotal > 0 && this.bytesReceived > 0) {
			return ((this.bytesTotal / this.bytesReceived) * 100);
		}
		return 0;
	}
}
