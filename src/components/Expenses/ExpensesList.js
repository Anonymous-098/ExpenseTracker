import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return(
        <h2 className="no-expense-style">No expenses found</h2>
    )
  }

  return(
      <div>
          {props.expenses.map((expense) => (
            <ExpenseItem expensesDetails={expense} key={expense.id} />
            ))}
      </div>
  )
};

export default ExpensesList;
