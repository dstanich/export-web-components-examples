import React from 'react';

import './AddGrocery.css';

function AddGrocery(props) {
  const addItem = event => {
    if (event.key === 'Enter') {
      props.addItem(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="AddGrocery">
      <input
        type="text"
        placeholder="Grocery"
        aria-label="Add a grocery item"
        onKeyDown={addItem}
      />
    </div>
  );
}

export default AddGrocery;
