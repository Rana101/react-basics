import React, {useState} from 'react';
import './App.css';
import ExpenseApp from './Expenses-App/ExpenseApp';
import GoalsApp from './Goals-App/GoalsApp';
import PersonalDetailsApp from './Personal-Details-App/PersonalDetailsApp';
import Wrapper from './lib/Helpers/Wrapper/Wrapper';

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

  return (
    <Wrapper>
      <div className="btn-group">
        {/* Expense APP  */}
        {!showExpenseApp && !showGoalsApp && !showDetailsApp && <button className="button" onClick={openExpenseAppUI}>Open Expense App</button>}
        {/* Goals APP  */}
        {!showGoalsApp && !showExpenseApp && !showDetailsApp && <button className="button" onClick={openGoalsAppUI}>Open Goals App</button>}
        {/* Personal Details APP  */}
        {!showGoalsApp && !showExpenseApp && !showDetailsApp && <button className="button" onClick={openPersonalDetailsAppUI}>Open Personal Details App</button>}
      </div>
      <div>
        {/* Expense APP  */}
        {showExpenseApp && <ExpenseApp control={closeExpenseAppUI} />}
        {/* Goals APP  */}
        {showGoalsApp && <GoalsApp control={closeGoalsAppUI} />}
        {/* Personal Details APP  */}
        {showDetailsApp && <PersonalDetailsApp control={closePersonalDetailsAppUI} />}
      </div>
    </Wrapper>
  );
}
export default App;
