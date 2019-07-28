import React from 'react';

// import './AddGrocery.css';

const styles = `
  .AddGrocery {
    display: flex;
    justify-content: center;
  }

  input {
    display: flex;
    flex: 0 0 75%;
    font-size: 1.5rem;
    padding: 10px 15px;
    border: 1px solid #420846;
    color: #0f1d4b;
    background: #e1eaff;
  }

  input::placeholder {
    color: #0f1d4b;
  }
`;

function AddGrocery(props) {
  const addItem = event => {
    if (event.key === 'Enter') {
      props.addItem(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="AddGrocery">
      <style type="text/css">{styles}</style>
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
