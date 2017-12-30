import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilter implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) return [];
   if (value==null || value=='') return items;
   var lvalue=value.toLowerCase();
   return items.filter(it => it[field].toLowerCase().indexOf(lvalue)>-1);
 }
}