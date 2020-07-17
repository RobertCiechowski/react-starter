import React from 'react'; // import biblioteki React
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        column1: PropTypes.node, 
        column2: PropTypes.node,
        column3: PropTypes.node, 
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}></h3>
                {this.props.column1}
                {this.props.column2}
                {this.props.column3}
            </section>
        )
    }
}

export default Column;