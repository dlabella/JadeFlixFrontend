import { CatalogItem } from "./catalog-item";
import { RemoteMediaSource } from "./remote-media-source";
import { Observable } from "rxjs";

export class CatalogItemRemoteMedia {
	public catalogItem: CatalogItem;
	public mediaSource: RemoteMediaSource;
}
