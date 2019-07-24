import React, { useState } from 'react';

import './App.css';
import { DataService } from './data.service';
import Title from './Title/Title';
import AddGrocery from './AddGrocery/AddGrocery';
import GroceryList from './GroceryList/GroceryList';

const dataService = new DataService();

function App() {
  const [items, setItems] = useState(dataService.items);

  const groceryAdded = item => {
    dataService.addItem(item);
    setItems([...dataService.items]);
  };

  const groceryItemClicked = item => {
    dataService.toggleItemStatus(item);
    setItems([...dataService.items]);
  };

  return (
    <div className="App">
      <Title text="React Groceries" />
      <div className="scrollable-area">
        <div className="add-grocery">
          <AddGrocery addItem={groceryAdded} />
        </div>
        <div className="grocery-list">
          <GroceryList items={items} itemClicked={groceryItemClicked} />
        </div>
      </div>
    </div>
  );
}

export default App;
