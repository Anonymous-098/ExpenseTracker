import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) =>{

    const saveExpenseHandler = (newExpenseData) =>{
        const expenseData = {
            ...newExpenseData,
            id:Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpenses;