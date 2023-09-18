import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import BillForm from './BillForm';
import Total from './Total';
import ExpenseList from './ExpenseList';

function App() {
  const [expensesA, setExpensesA] = useState([]);
  const [expensesB, setExpensesB] = useState([]);

  const addExpense = (expense) => {
    if (expense.person === 'A') {
      setExpensesA([...expensesA, expense]);
    } else if (expense.person === 'B') {
      setExpensesB([...expensesB, expense]);
    } else if (expense.person === 'Common') {
      const commonShare = expense.amount / 2; // Divide the common expense equally
      setExpensesA([...expensesA, { ...expense, amount: commonShare }]);
      setExpensesB([...expensesB, { ...expense, amount: commonShare }]);
    }
  };

  const removeExpense = (index, person) => {
    if (person === 'A') {
      const updatedExpenses = [...expensesA];
      updatedExpenses.splice(index, 1);
      setExpensesA(updatedExpenses);
    } else if (person === 'B') {
      const updatedExpenses = [...expensesB];
      updatedExpenses.splice(index, 1);
      setExpensesB(updatedExpenses);
    }
  };

  return (
    <div className="App">
      <h1>Bill Splitter</h1>
      <BillForm addExpense={addExpense} />
      <ExpenseList expenses={expensesA} removeExpense={removeExpense} person="A" />
      <ExpenseList expenses={expensesB} removeExpense={removeExpense} person="B" />
      <Total expensesA={expensesA} expensesB={expensesB} />
      
    </div>
  );
}

export default App;
