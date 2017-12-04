import { MediaSource } from './media-source';
import { RemoteMediaSource } from './remote-media-source';

export class CatalogMedia {
    public Remote:RemoteMediaSource[];
    public Local:MediaSource[];
}
