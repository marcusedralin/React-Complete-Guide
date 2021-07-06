import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const TEST_Expenses = [
  {
    id: 'e1',
    title: 'Gas',
    amount: 73.23,
    date: new Date(2020, 2, 14),
  },
  {
    id: 'e2',
    title: 'Groceries',
    amount: 267.32,
    date: new Date(2020, 2, 10),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 302.12,
    date: new Date(2020, 2, 17),
  },
  {
    id: 'e4',
    title: 'Electricity',
    amount: 201.67,
    date: new Date(2020, 2, 28),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(TEST_Expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
