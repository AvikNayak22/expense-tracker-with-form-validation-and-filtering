import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <div>
      <main>
        <h1>Track Your Expenses</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
          <ContextMenu />
        </div>
      </main>
    </div>
  );
};

export default App;
