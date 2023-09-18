import React from 'react';

function ExpenseList({ expenses, removeExpense, person }) {
  return (
    <div>
      <h2>Expenses for {person}:</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.itemName}: ${expense.amount.toFixed(2)}{' '}
            <button onClick={() => removeExpense(index, person)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
