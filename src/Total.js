import React from 'react';

function Total({ expensesA, expensesB }) {
  const totalA = expensesA.reduce((acc, expense) => acc + expense.amount, 0);
  const totalB = expensesB.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h2>Total Contributions:</h2>
      <p>Total for Person A: ${totalA.toFixed(2)}</p>
      <p>Total for Person B: ${totalB.toFixed(2)}</p>
    </div>
  );
}

export default Total;
