import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  get items(): Array<Item> {
    return this._items;
  }

  private _items: Array<Item> = [];

  constructor() {}

  addItem(name: string) {
    this._items.push({
      name,
      removed: false
    });
  }

  toggleItemStatus(name: string) {
    const foundItem = this.findItemByName(name);
    if (foundItem) {
      foundItem.removed = !foundItem.removed;
    }
  }

  clearItems() {
    this._items = [];
  }

  private findItemByName(name: string): Item {
    const search = this._items.filter((item: Item) => item.name === name);
    return search.length > 0 ? search[0] : undefined;
  }
}

export interface Item {
  name: string;
  removed: boolean;
}
