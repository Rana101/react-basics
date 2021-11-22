import React, { useState } from 'react';
import './App.css';
import ExpenseApp from './Expenses-App/ExpenseApp';
import GoalsApp from './Goals-App/GoalsApp';
import PersonalDetailsApp from './Personal-Details-App/PersonalDetailsApp';
import LoginApp from './Login-App/LoginApp';

const App = () => {
  //to show and hide Expense App
  const [showExpenseApp, setShowExpenseApp] = useState(false);
  const openExpenseAppUI = () => setShowExpenseApp(true);
  const closeExpenseAppUI = () => setShowExpenseApp(false);

  //to show and hide Goals App
  const [showGoalsApp, setShowGoalsApp] = useState(false);
  const openGoalsAppUI = () => setShowGoalsApp(true);
  const closeGoalsAppUI = () => setShowGoalsApp(false);

  //to show and hide Personal Details App
  const [showDetailsApp, setShowDetailsApp] = useState(false);
  const openPersonalDetailsAppUI = () => setShowDetailsApp(true);
  const closePersonalDetailsAppUI = () => setShowDetailsApp(false);

  //to show and hide Login App
  const [showLoginApp, setShowLoginApp] = useState(false);
  const openLoginAppUI = () => setShowLoginApp(true);
  const closeLoginAppUI = () => setShowLoginApp(false);

  return (
    <React.Fragment>
      <div className="btn-group">
        {/* Expense APP  */}
        {!showExpenseApp && !showGoalsApp && !showDetailsApp && !showLoginApp && <button className="button" onClick={openExpenseAppUI}>Open Expense App</button>}
        {/* Goals APP  */}
        {!showGoalsApp && !showExpenseApp && !showDetailsApp && !showLoginApp && <button className="button" onClick={openGoalsAppUI}>Open Goals App</button>}
        {/* Personal Details APP  */}
        {!showGoalsApp && !showExpenseApp && !showDetailsApp && !showLoginApp && <button className="button" onClick={openPersonalDetailsAppUI}>Open Personal Details App</button>}
        {/* Login APP  */}
        {!showGoalsApp && !showExpenseApp && !showDetailsApp && !showLoginApp && <button className="button" onClick={openLoginAppUI}>Open Login App</button>}
      </div>
      <React.Fragment>
        {/* Expense APP  */}
        {showExpenseApp && <ExpenseApp control={closeExpenseAppUI} />}
        {/* Goals APP  */}
        {showGoalsApp && <GoalsApp control={closeGoalsAppUI} />}
        {/* Personal Details APP  */}
        {showDetailsApp && <PersonalDetailsApp control={closePersonalDetailsAppUI} />}
        {/* Login APP  */}
        {showLoginApp && <LoginApp control={closeLoginAppUI} />}
      </React.Fragment>
    </React.Fragment>
  );
}
export default App;
