import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  @Output() filterText:string;
  constructor() { }

  ngOnInit() {

  }

  onKeyPress(event:any,filter:string){
    this.filterText=filter;
  }
}
