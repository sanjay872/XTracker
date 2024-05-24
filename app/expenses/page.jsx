"use client"

import '@styles/Expenses.css';
import ExpenseForm from "@components/Expenses-Form"
import { useEffect, useState } from "react";
import ExpensesView from "@components/ExpensesView";

const page = () => {
  const [expense,setExpense]=useState({
    userid:"",
    id:"",
    title:"",
    cost:"",
    day:"",
    month:"",
    year:"",
    description:"",
    category:"",
    document:""
  });
  const [expenses,setExpenses]=useState([
    {
      userid:"1",
      id:"1",
      title:"Shopping",
      cost:"100",
      day:"1",
      month:"5",
      year:"2021",
      description:"Shopping at Walmart",
      category:"Grocery",
      document:""
    },
    {
      userid:"1",
      id:"2",
      title:"Rent",
      cost:"500",
      day:"5",
      month:"5",
      year:"2021",
      description:"Rent for the month of May",
      category:"Housing",
      document:""
    },
    {
      userid:"1",
      id:"3",
      title:"Internet",
      cost:"50",
      day:"10",
      month:"5",
      year:"2021",
      description:"Internet bill for the month of May",
      category:"Utilities",
      document:""
    },
    {
      userid:"1",
      id:"4",
      title:"Electricity",
      cost:"30",
      day:"15",
      month:"5",
      year:"2021",
      description:"Electricity bill for the month of May",
      category:"Utilities",
      document:""
    },
    {
      userid:"1",
      id:"5",
      title:"Gas",
      cost:"20",
      day:"24",
      month:"5",
      year:"2024",
      description:"Gas bill for the month of May",
      category:"Utilities",
      document:""
    }
  ]);

  const [submitting,setSubmitting]=useState(false);

  // useEffect(()=>{
  //   const date=new Date();
  //   const month=date.getMonth()+1;
  //   const year=date.getFullYear();
  //   const userExpenses=expenses.filter(expense=>expense.month==month && expense.year==year);
  //   setExpenses([...userExpenses]);
  // },[expenses]);

  const handleAdd=(e)=>{
    e.preventDefault();
    setSubmitting(true);
    const newId=expenses.length+1;
    const newExpense={...expense,id:newId,userid:"1"};
    setTimeout(()=>{
      setExpenses([...expenses,newExpense]);
      setExpense({
        userid:"",
        id:"",
        title:"",
        cost:"",
        day:"",
        month:"",
        year:"",
        description:"",
        category:"",
        document:""
      });
    },1000);
    setSubmitting(false);
  }

  const handleEdit=(updatedExpense)=>{
    setExpense(updatedExpense);
  }

  const handleDelete=(id)=>{
    const newExpenses=expenses.filter(expense=>expense.id!==id);
    setExpenses([...newExpenses]);
  }

  return (
    <div className="expenses_layout">
      <ExpenseForm  type={"Add"} setExpense={setExpense} expense={expense} submitting={submitting} handleSubmitting={handleAdd} />
      <ExpensesView expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  )
}

export default page