"use client"

import '@styles/Expenses.css';
import ExpenseForm from "@components/Expenses-Form"
import { useState } from "react";
import Expenses from "@components/Expenses";

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
      <Expenses />
    </div>
  )
}

export default page