"use client"

import '@styles/ExpenseForm.css';

const ExpenseForm = ({type,expense,setExpense,submitting,handleSubmitting}) => {
  return (
    <div className='form_layout'>
        <h1 className="font-bold text-2xl">{type} Expense</h1>
        <form className='form' onSubmit={handleSubmitting}>
            <input 
                type="text" value={expense.title} 
                onChange={(e)=>setExpense({...expense,title:e.target.value})} 
                placeholder="Enter Expense"
                required
                />
            <input 
                type="number" value={expense.cost} 
                onChange={(e)=>setExpense({...expense,cost:e.target.value})} 
                placeholder="Enter Amount"
                required
                />
            <input 
                type="date" value={expense.date}
                onChange={(e)=>setExpense({...expense,date:e.target.value})} 
                placeholder="Enter Date"
                required
                />
            <textarea value={expense.description}
                onChange={(e)=>setExpense({...expense,description:e.target.value})} 
                placeholder="Enter Description" 
                />
        {/* <input type="text" value={expense.category} placeholder="Enter Category" />
        <input type="file" value={expense.document} placeholder="Upload Document" /> */}
        <button type="submit" className="black_btn justify-center">
          {submitting ? "Submitting..." : type}
        </button>
      </form>
    </div>
  );
};
export default ExpenseForm;
