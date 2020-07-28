import React from 'react'; // import biblioteki React
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const {title} = this.props;
    return (
      <section className={styles.Component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;