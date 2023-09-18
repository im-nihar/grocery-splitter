import React, { useState } from 'react';

function BillForm({ addExpense }) {
  const [amount, setAmount] = useState(0);
  const [person, setPerson] = useState('A');

  const handleItemClick = (itemName) => {
    addExpense({ itemName, amount, person });
    setAmount(0);
  };

  return (
    <div>
      <h2>Add an Expense:</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <h3>Item Selection:</h3>
        <button onClick={() => setPerson('A')}>Person A</button>
        <button onClick={() => setPerson('B')}>Person B</button>
        <button onClick={() => setPerson('Common')}>Common</button>
      </div>
      <div>
        <button onClick={() => handleItemClick('Bread')}>Bread</button>
        <button onClick={() => handleItemClick('Veggies')}>Veggies</button>
        <button onClick={() => handleItemClick('Biscuits')}>Biscuits</button>
        <button onClick={() => handleItemClick('Fruits')}>Fruits</button>
        <button onClick={() => handleItemClick('Chips')}>Chips</button>
        <button onClick={() => handleItemClick('Chicken')}>Chicken</button>
      </div>
    </div>
  );
}

export default BillForm;
