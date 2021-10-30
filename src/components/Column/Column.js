import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = { 
    columns: this.props.columns || [],
  };

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    console.log('props', this.props);
    return (
      <section className={styles.component} >
        <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.icon}/></span></h3>
        <Card className={styles.title} />
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  };
};

export default Column;