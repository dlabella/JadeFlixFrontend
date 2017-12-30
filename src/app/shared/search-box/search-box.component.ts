import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();
  
  
  constructor() { }

  ngOnInit() {
  }

  onKeyPress(keyEvent:any, filter:string) {
    if (keyEvent.which === 13){
      this.searchText.emit(filter);
    }
  }
}
