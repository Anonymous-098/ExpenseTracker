import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

    const dropDownValueHandler = (e) =>{
        props.onChangeYear(e.target.value);
    }

  return (
    <div className="expense-filter">
      <div className="expense-filter__controls">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownValueHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
