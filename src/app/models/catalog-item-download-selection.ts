import { CatalogItem } from "./catalog-item";
import { MediaSource } from "./media-source";
import { Observable } from "rxjs/Observable";

export class CatalogItemDownloadSelection {
	public catalogItem: CatalogItem;
	public media: MediaSource;
	public download: MediaSource;
}
