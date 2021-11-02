import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const {title, image, description, columns} = this.props;
    return (
      <section className={styles.component} >
        <Hero titleText={title} backgroundImage={image} />
        <div className={styles.description}>{ReactHtmlParser(description)}
        </div>
        
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        {/* <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div> */}
      </section>
    );
  }
}

List.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
  columns: PropTypes.array,
};

export default List;