import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() eventBtn = new EventEmitter();


  constructor() {}

  ngOnInit() {}

  
  btnRadio(value: String) {
    this.eventBtn.emit(value);
    console.log(value)

  }
}
