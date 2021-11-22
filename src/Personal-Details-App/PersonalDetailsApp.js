import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import styles from './PersonalDetailsApp.module.css';
import UsersList from "./components/Users/UsersList";
import Button from "./components/UI/Button/Button";

const PersonalDetailsApp = (props) => {
	const [userData, setUserData] =	useState([]);

	const addUserHandler = (uName, uAge) => {
		setUserData((prevUsersList)=> {
			return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}];
		});
	};
	
	return (
		<div className={styles.wrapper} >
			<AddUser onAddUser={addUserHandler} />
			<UsersList userData={userData} />	
			<div className={styles['button-container']}>
				<Button type="button" onClick={props.control} >Close Goals App</Button>
			</div>
		</div>
	);
};

export default PersonalDetailsApp;