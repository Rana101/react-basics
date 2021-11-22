import React, { useState, useRef } from "react";

import Card from "../UI/Card/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modals/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorState, setErrorState] = useState();

  const submitUserDataHandler =(event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
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
    props.onAddUser(enteredName, enteredAge );
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <React.Fragment>
      {errorState && <ErrorModal title={errorState.title} message={errorState.message} onConfirm={errorHandler}/>}
      <Card className={styles.form}>
        <form onSubmit={submitUserDataHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;