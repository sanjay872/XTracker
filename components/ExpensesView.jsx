"use client"

import "@styles/ExpensesView.css";
import { useState } from "react";

const ExpensesView = () => {
    // Define expenses state
    const [expenses, setExpenses] = useState([
        { id: 1, date: "2021-01-01", description: "Groceries", amount: 100 },
        { id: 2, date: "2021-01-02", description: "Gas", amount: 50 },
        { id: 3, date: "2021-01-03", description: "Dinner", amount: 75 },
    ]);
    return (
        <div className="view_layout">
            <div className="header">
                <h1 className="font-bold text-2xl">Expenses</h1>
            </div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render each expense item */}
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ExpensesView;