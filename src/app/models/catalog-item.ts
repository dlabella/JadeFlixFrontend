import { CatalogMedia } from './catalog-media';

export class CatalogItem {
    public Id:string;
    public UId:string;
    public NId:string;
    public Name:string;
    public Banner:string;
    public Poster:string;
    public Plot:string;
    public Properties:Map<string,string>;
    public ScrapedBy:string;
    public Kind:string;
    public KindName:string;
    public Group:string;
    public GroupName:string;
    public Url:string;
    public Media:CatalogMedia;
}
