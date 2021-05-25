import React, { useState } from 'react';
import ExpensesList from './components/organisms/ExpensesList/ExpensesList';
import Form from './components/organisms/Form/Form';

const initialState = [
  {
    title: 'Car insurance',
    cost: 797.67,
    date: new Date(2021, 11, 28),
  },
  {
    title: 'Renault Megane RS',
    cost: 1097.67,
    date: new Date(2021, 10, 28),
  },
  {
    title: 'Car wash',
    cost: 10,
    date: new Date(2021, 5, 13),
  },
  {
    title: 'Netflix',
    cost: 50,
    date: new Date(2021, 4, 13),
  },
  {
    title: 'Car insurance',
    cost: 450.5,
    date: new Date(2021, 1, 20),
  },
  {
    title: 'New skateboard',
    cost: 200.5,
    date: new Date(2021, 4, 20),
  },
  {
    title: 'New tires',
    cost: 319.99,
    date: new Date(2021, 6, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialState);

  const expenseData = (data) => {
    const expenseItem = {
      ...data,
    };
    setExpenses((prevState) => {
      return [expenseItem, ...prevState];
    });
  };

  return (
    <div>
      <Form onFormSubmit={expenseData} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default App;
