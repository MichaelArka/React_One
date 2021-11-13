import React from 'react';
import Container from '../Container/Container';
import {infoData} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './Info.scss';
import Hero from '../Hero/Hero';

const Info = () => {
  const {h2Content, pContent, defaultListDescription, image, title} = infoData;
  return (
    <Container>
      <Hero titleText={title} backgroundImage={image} />
      <div className={styles.description}>{ReactHtmlParser(defaultListDescription)}
      </div>
      <div>
        <div className={styles.h2}>{ReactHtmlParser(h2Content)}</div>
        <div className={styles.paragraf}>{ReactHtmlParser(pContent)}</div>
      </div>
    </Container>
  );
};

export default Info;