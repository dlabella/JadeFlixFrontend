import { CatalogItem } from "./catalog-item";
import { MediaSource } from "./media-source";
import { Observable } from "rxjs";
import { RemoteMediaSource } from "./remote-media-source";

export class CatalogItemDownloadSelection {
	public catalogItem: CatalogItem;
	public media: RemoteMediaSource;
	public download: MediaSource;
}
