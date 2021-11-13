import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import {pageContents} from '../../data/dataStore';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    list: PropTypes.array,
  };

  render() {
    const {lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

Home.propTypes = {
  map: PropTypes.any,
  lists: PropTypes.array,
};

export default Home;
