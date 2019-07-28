class DataService {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  addItem(name) {
    this._items.push({
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
    this._items = [];
  }

  _findItemByName(name) {
    const search = this._items.filter(item => item.name === name);
    return search.length > 0 ? search[0] : undefined;
  }
}
