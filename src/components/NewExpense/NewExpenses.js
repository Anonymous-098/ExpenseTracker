import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  const addExpenseButtonHandler = () =>{
      setShowForm(!showForm);
  }

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpense={saveExpenseHandler} cancelButtonHandler={addExpenseButtonHandler}/>
      ) : (
        <div className="add-expense__control">
            <button className="add-expense" onClick={addExpenseButtonHandler}>Add new expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpenses;
