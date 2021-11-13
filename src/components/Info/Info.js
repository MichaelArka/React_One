import React from 'react';
import Container from '../Container/Container';
import {Info__data} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './Info.scss';

const Info = () => {
  const {h2__content, p__content} = Info__data;
  return (
    <Container>
      <div>
        <div className={styles.h2}>{ReactHtmlParser(h2__content)}</div>
        <div className={styles.paragraf}>{ReactHtmlParser(p__content)}</div>
      </div>
    </Container>
  );
};

export default Info;