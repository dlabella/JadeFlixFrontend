import { MediaSource } from './media-source';
import { DownloadInfo } from './download-info';

export class RemoteMediaSource extends MediaSource {
    public DownloadLocations:MediaSource[];
    public DownloadState:DownloadInfo;
}
