import React from 'react';
import styles from './Column.scss';

const Column = props => (
  <section className={styles.component} >
    <h3 className={styles.title}>{props.columnText} </h3>
  </section>
);



export default Column;