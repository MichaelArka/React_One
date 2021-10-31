import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

class Column extends React.Component {
  state = { 
    cards: this.props.cards || [],
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.node,
    addCard: PropTypes.func,
  };

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component} >
        <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.icon}/></span></h3>

        <div className={styles.cards}>
          {this.state.cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Column;