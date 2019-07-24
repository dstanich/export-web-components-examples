export class DataService {
  get items() {
    return this._intItems;
  }

  _intItems = [];

  constructor() {
    /* */
  }

  addItem(name) {
    this._intItems.push({
      name,
      removed: false
    });
  }

  toggleItemStatus(name) {
    const foundItem = this._findItemByName(name);
    if (foundItem) {
      foundItem.removed = !foundItem.removed;
    }
  }

  clearItems() {
    this._intItems = [];
  }

  _findItemByName(name) {
    const search = this._intItems.filter(item => item.name === name);
    return search.length > 0 ? search[0] : undefined;
  }
}
