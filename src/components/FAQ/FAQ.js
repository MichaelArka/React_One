import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';

class FAQ extends React.Component {
  render() {
    const {image, title, pContent, h1Content, defaultListDescription} = faqData;
    return (
      <Container>
        <Hero titleText={title} backgroundImage={image} />
        <div className={styles.description}>{ReactHtmlParser(defaultListDescription)}
        </div>
        
        <div className={styles.description}>{ReactHtmlParser(h1Content)}</div>
        <div className={styles.component}>{ReactHtmlParser(pContent)}</div>
      </Container>
    );
  }
}

export default FAQ;