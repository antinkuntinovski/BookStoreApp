import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return props.show ? <div className={styles.backdrop} onClick={props.clicked}></div> : null;
};

export default Backdrop;
