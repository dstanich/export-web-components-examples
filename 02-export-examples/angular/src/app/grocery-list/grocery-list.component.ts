import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../data.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {
  @Input() items: Array<Item>;
  @Output() itemClicked: EventEmitter<string> = new EventEmitter();

  constructor() {}

  handleItemClicked(item: Item) {
    this.itemClicked.emit(item.name);
  }
}
