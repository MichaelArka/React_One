import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQ__data} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';

class FAQ extends React.Component {
  render() {
    const {image, title, p__content, h1__content, defaultListDescription} = FAQ__data;
    return (
      <Container>
        <Hero titleText={title} backgroundImage={image} />
        <div className={styles.description}>{ReactHtmlParser(defaultListDescription)}
        </div>
        
        <div className={styles.description}>{ReactHtmlParser(h1__content)}</div>
        <div className={styles.component}>{ReactHtmlParser(p__content)}</div>
      </Container>
    );
  }
}

export default FAQ;