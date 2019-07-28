import React from 'react';
import { register } from 'web-react-components';

// import './GroceryList.css';
const styles = `
  .GroceryList {
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
  }

  h1 {
    color: #0f1d4b;
  }

  .main-container {
    display: flex;
    flex: 0 0 75%;
    flex-direction: column;
    align-items: center;
    background: #e1eaff;
    box-shadow: 1px 1px 5px 1px #000000;
    padding: 10px 15px;
  }

  .grocery-item {
    display: flex;
    width: 85%;
    font-size: 1.25rem;
    padding: 10px;
    margin: 5px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .grocery-item--removed {
    opacity: 0.5;
    text-decoration: line-through;
  }

  .grocery-item-count {
    width: 50px;
  }
`;

function GroceryList(props) {
  const handleItemClicked = item => {
    props.itemClicked(item.name);
  };

  return (
    <div className="GroceryList">
      <style type="text/css">{styles}</style>
      {props.items && props.items.length > 0 ? (
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

register(GroceryList, 'react-grocery-list', ['items'], {
  itemClicked: e => new CustomEvent('itemClicked', { detail: e })
});

export default GroceryList;
