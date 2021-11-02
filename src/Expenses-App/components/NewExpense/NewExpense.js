import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormUI = () => setShowForm(true);

  const hideFormUI = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormUI}>Add New Expense</button>}
      { showForm && <ExpenseForm onCancel={hideFormUI} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );

};

export default NewExpense;