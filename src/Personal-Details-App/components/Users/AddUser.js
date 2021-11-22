import React, {useState} from "react";

import Card from "../UI/Card/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modals/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [errorState, setErrorState] = useState();

  const submitUserDataHandler =(event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setErrorState({
        title: 'Invalid Input',
        message: 'Please Enter a valid name and age (non-empty values).'
      });
      return;
    }
    if(+enteredAge < 1){
      setErrorState({
        title: 'Invalid Age',
        message: 'Please Enter a valid age (> 0).'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge );
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <React.Fragment>
      {errorState && <ErrorModal title={errorState.title} message={errorState.message} onConfirm={errorHandler}/>}
      <Card className={styles.form}>
        <form onSubmit={submitUserDataHandler}>
          <label htmlFor="username">Username</label>
          <input onChange={usernameChangeHandler} value={enteredUsername} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input onChange={ageChangeHandler} value={enteredAge} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;