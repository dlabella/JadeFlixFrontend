import { MediaSource } from './media-source';
import { RemoteMediaSource } from './remote-media-source';

export class CatalogMedia {
	public remote: RemoteMediaSource[];
	public local: MediaSource[];
}
