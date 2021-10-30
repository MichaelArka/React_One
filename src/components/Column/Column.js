import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

class Column extends React.Component {
  state = { 
    columns: this.props.columns || [],
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  addCard(title){
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
    // console.log('this', this);
    const {cards} = this.props;
    return (
      <section className={styles.component} >
        <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.icon}/></span></h3>
        <Card className={styles.title} />

        <div className={styles.card}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Card key={key} {...columnProps} />
          ))}
        </div>

        <div className={styles.card}>{cards.map((cardData, column_style_key)=> (<div key={column_style_key} className={styles.second__component}>
          <Card key={cardData.id} {...cardData} /></div>))}
        </div>

        <div className={styles.card}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  };
};

export default Column;