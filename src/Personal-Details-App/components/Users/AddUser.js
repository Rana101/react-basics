import React, {useState} from "react";

import Card from "../UI/Card/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitUserDataHandler =(event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={submitUserDataHandler}>
        <label htmlFor="username">Username</label>
        <input onChange={usernameChangeHandler} value={enteredUsername} id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input onChange={ageChangeHandler} value={enteredAge} id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;