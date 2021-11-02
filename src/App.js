import React, {useState} from 'react';
import './App.css';
import ExpenseApp from './Expenses-App/ExpenseApp';

const App = () => {
  const [showExpenseApp, setShowExpenseApp] = useState(false);
  const openExpenseAppUI = () => setShowExpenseApp(true);
  const closeExpenseAppUI = () => setShowExpenseApp(false);

  return (
    <div className="button-container">
      {!showExpenseApp && <button onClick={openExpenseAppUI}>Open Expense App</button>}
      {showExpenseApp && <ExpenseApp control={closeExpenseAppUI} />}
    </div>
  );
}
export default App;
