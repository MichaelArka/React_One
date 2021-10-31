import styles from './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <section className={styles.component}><h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;