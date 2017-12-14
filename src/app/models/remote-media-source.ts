import { MediaSource } from './media-source';
import { DownloadInfo } from './download-info';

export class RemoteMediaSource extends MediaSource {
	public downloadLocations: MediaSource[];
	public downloadPercentCompleted: number;
	public downloading: boolean;
	public queued: boolean;
}
