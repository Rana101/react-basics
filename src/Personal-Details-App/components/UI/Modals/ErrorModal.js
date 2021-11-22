import React from "react";
import ReactDOM from "react-dom";
import styles from './ErrorModal.module.css';

import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
}

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header>
        <h2 className={styles.header}>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))};
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))};
    </React.Fragment>
  );
};

export default ErrorModal;