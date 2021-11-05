import React from "react";
import AddUser from "./components/Users/AddUser";
import styles from './PersonalDetailsApp.module.css';

const PersonalDetailsApp = (props) => {
	
	return (
		<div className={styles.wrapper} >
			<AddUser />
		</div>
	);
};

export default PersonalDetailsApp;