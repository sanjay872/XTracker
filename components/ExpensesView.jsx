
import "@styles/ExpensesView.css";

const ExpensesView = ({expenses,handleEdit,handleDelete}) => {
  return (
    <div className="view_layout">
      <div className="header">
        <h1 className="font-bold text-2xl">Expenses</h1>
        <div>
        <label>Filter by Month or Year  </label>
        <select className="monthDropDown">
          <option value="1">JAN</option>
          <option value="2">FEB</option>
          <option value="3">MAR</option>
          <option value="4">APR</option>
          <option value="5">MAY</option>
          <option value="6">JUN</option>
          <option value="7">JUL</option>
          <option value="8">AUG</option>
          <option value="9">SEP</option>
          <option value="10">OCT</option>
          <option value="11">NOV</option>
          <option value="12">DEC</option>
        </select>
        <select className="yearDropDown">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        </div>
      </div>
    <div className="list">
        {/* Render each expense item */}
      {expenses.map((expense) => (
        <div key={expense.id}
          className="flex w-full flex-col mb-2 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div  className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div>
                {expense.title} - ${expense.cost}
            </div>
            <div className="text-xl">
                <button className="text-zinc-200 hover:underline m-2" onClick={()=>{
                    handleEdit(expense);
                }}>Edit</button>
                <button className="text-zinc-200 hover:underline" onClick={()=>{
                    handleDelete(expense.id);
                }}>Delete</button>
            </div>
          </div>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            {expense.day}-{expense.month}-{expense.year} - {expense.description}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default ExpensesView;
