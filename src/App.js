import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const addExpenseHandler = (expense) => {
    setExpenses([expense,...dummy_expenses]);
  };

  const [expenses,setExpenses] = useState(dummy_expenses);

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
