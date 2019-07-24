import { Component } from '@angular/core';

import { DataService, Item } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get groceryItems(): Array<Item> {
    return this.dataService.items;
  }

  constructor(private dataService: DataService) {}

  groceryAdded(name: string) {
    this.dataService.addItem(name);
  }

  groceryItemClicked(name: string) {
    this.dataService.toggleItemStatus(name);
  }

  clearItems() {
    this.dataService.clearItems();
  }
}
