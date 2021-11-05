import React, {useState} from 'react';
import './App.css';
import ExpenseApp from './Expenses-App/ExpenseApp';
import GoalsApp from './Goals-App/GoalsApp';

const App = () => {
  //to show and hide Expense App
  const [showExpenseApp, setShowExpenseApp] = useState(false);
  const openExpenseAppUI = () => setShowExpenseApp(true);
  const closeExpenseAppUI = () => setShowExpenseApp(false);

  //to show and hide Goals App
  const [showGoalsApp, setShowGoalsApp] = useState(false);
  const openGoalsAppUI = () => setShowGoalsApp(true);
  const closeGoalsAppUI = () => setShowGoalsApp(false);

  return (
    <div>
      <div className="btn-group">
        {/* Expense APP  */}
        {!showExpenseApp && !showGoalsApp && <button className="button" onClick={openExpenseAppUI}>Open Expense App</button>}
        {/* Goals APP  */}
        {!showGoalsApp && !showExpenseApp && <button className="button" onClick={openGoalsAppUI}>Open Goals App</button>}
      </div>
      <div>
        {/* Expense APP  */}
        {showExpenseApp && <ExpenseApp control={closeExpenseAppUI} />}
        {/* Goals APP  */}
        {showGoalsApp && <GoalsApp control={closeGoalsAppUI} />}
      </div>
    </div>
  );
}
export default App;
