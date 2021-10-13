import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
      <header className={styles.component}>
        <h2 className={styles.title}>React Hero</h2>
        <img className={styles.image} src="/src/images/space.png"></img>
      </header>
    );

export default Hero;
