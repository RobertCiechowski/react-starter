import React from 'react'; // import biblioteki React
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
    }

    render () {
        const {title} = this.props;
        return (
            <section className={styles.Component}>
                <h3 className={title}></h3>
            </section>
        );
    }
}

export default Card;