"use client"

import '@styles/Expenses.css';
import ExpenseForm from "@components/Expenses-Form"
import { useState } from "react";
import ExpensesView from "@components/ExpensesView";

const page = () => {
  const [expense,setExpense]=useState({
    userid:"",
    title:"",
    cost:"",
    date:"",
    description:"",
    category:"",
    document:""
  });

  const [submitting,setSubmitting]=useState(false);

  const handleAdd=(e)=>{
    e.preventDefault();
    console.log(expense)
    console.log("Add Expense")
  }

  return (
    <div className="expenses_layout">
      <ExpenseForm  type={"Add"} setExpense={setExpense} expense={expense} submitting={submitting} handleSubmitting={handleAdd} />
      <ExpensesView />
    </div>
  )
}

export default page