import React from 'react';

import './GroceryList.css';

function GroceryList(props) {
  const handleItemClicked = item => {
    props.itemClicked(item.name);
  };

  return (
    <div className="GroceryList">
      {props.items.length > 0 ? (
        <div className="main-container">
          <h1>Groceries</h1>

          {props.items.map((item, index) => {
            return (
              <button
                key={item.name}
                className={`grocery-item ${
                  item.removed ? 'grocery-item--removed' : ''
                }`}
                onClick={() => handleItemClicked(item)}
              >
                <span className="grocery-item-count">{index + 1}.</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default GroceryList;
