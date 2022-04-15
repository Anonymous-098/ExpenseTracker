import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const title = props.expensesDetails.title;
  const amount = props.expensesDetails.amount;
  const date = new Date(props.expensesDetails.date);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__title">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__amount">$ {amount}</div>
    </Card>
  );
};

export default ExpenseItem;
