import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
    static propTypes = { // definicja typów propsów
      title: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
      //children: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
      image: PropTypes.node,
      description: PropTypes.node,
      columns: PropTypes.array,
    }

    static defaultProps = { // ustawienie domyślnych wartości parametrów, kiedy nie zostanie podana żadna zawartośc opisu listy, czyli to jest domyślny opis listy
      //children: <p>I can do all the things!!!</p>
      description: settings.defaultListDescription,
    }
    
    render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={'Animals'} />
          <Column titleColumn={'Plants'} />
          <Column titleColumn={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List; // export klasy List