import React, { useState, useRef, useEffect } from 'react';

import './App.css';
import { DataService } from './data.service';
import Title from './Title/Title';

const dataService = new DataService();

function App() {
  const [items, setItems] = useState(dataService.items);

  // groceryAdded
  let addGrocery = useRef(null);
  useEffect(() => {
    // groceryAdded handler
    const element = addGrocery.current;
    let handler = data => {
      dataService.addItem(data.detail);
      setItems([...dataService.items]);
    };
    element.addEventListener('groceryAdded', handler);
    return () => element.removeEventListener('groceryAdded', handler);
  }, []);

  // groceryList
  let groceryList = useRef(null);
  useEffect(() => {
    // Set list
    const element = groceryList.current;
    element.items = items;

    // itemClicked handler
    let handler = data => {
      dataService.toggleItemStatus(data.detail[0]);
      setItems([...dataService.items]);
    };
    element.addEventListener('itemClicked', handler);
    return () => element.removeEventListener('itemClicked', handler);
  });

  return (
    <div className="App">
      <Title text="Mixed Framework Groceries" />
      <div className="scrollable-area">
        <div className="add-grocery">
          <angular-add-grocery ref={addGrocery} />
        </div>
        <div className="grocery-list">
          <vue-grocery-list ref={groceryList} />
        </div>
      </div>
    </div>
  );
}

export default App;
