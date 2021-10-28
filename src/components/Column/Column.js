import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  state = { 
    cards: this.props.cards || [],
  };

  addCard(title){
    this.setState(state => (
      {
        columns: [
          ...state.cards,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  };

  render() {
    return (
      <section className={styles.component} >
        <h3 className={styles.title}>{this.props.title} </h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  };
};

export default Column;