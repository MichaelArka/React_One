import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import {pageContents} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class App extends React.Component {
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
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

App.propTypes = {
  map: PropTypes.any,
  lists: PropTypes.array,
};

export default App;
