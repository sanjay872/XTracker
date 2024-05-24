"use client"

import '@styles/Expenses.css';
import ExpenseForm from "@components/Expenses-Form"
import { useState } from "react";
import ExpensesView from "@components/ExpensesView";

const page = () => {
  const [expense,setExpense]=useState({
    userid:"",
    id:"",
    title:"",
    cost:"",
    date:"",
    description:"",
    category:"",
    document:""
  });
  const [expenses,setExpenses]=useState([]);

  const [submitting,setSubmitting]=useState(false);

  const handleAdd=(e)=>{
    e.preventDefault();
    setSubmitting(true);
    setTimeout(()=>{
      setExpenses([...expenses,expense]);
      setExpense({
        userid:"",
        id:"",
        title:"",
        cost:"",
        date:"",
        description:"",
        category:"",
        document:""
      });
    },1000);
    setSubmitting(false);
  }

  return (
    <div className="expenses_layout">
      <ExpenseForm  type={"Add"} setExpense={setExpense} expense={expense} submitting={submitting} handleSubmitting={handleAdd} />
      <ExpensesView expenses={expenses}/>
    </div>
  )
}

export default page