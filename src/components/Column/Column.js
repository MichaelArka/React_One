import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title,icon,cards, addCard} = this.props;
    return (
      <section className={styles.component} >
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon}/></span></h3>

        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
        
      </section>
    );
  }
}

export default Column;