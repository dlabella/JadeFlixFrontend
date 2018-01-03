import { CatalogMedia } from './catalog-media';

export class CatalogItem {
	public id: string;
	public uId: string;
	public nId: string;
	public name: string;
	public banner: string;
	public poster: string;
	public plot: string;
	public properties: Map<string, string>;
	public scrapedBy: string;
	public kind: string;
	public kindName: string;
	public group: string;
	public groupName: string;
	public url: string;
	public media: CatalogMedia;
	public watching:boolean;
}
