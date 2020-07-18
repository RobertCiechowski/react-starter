import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
    static propTypes = { // definicja typów propsów
        title: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
        children: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
        imgUrl: PropTypes.node,
    }

    static defaultProps = { // ustawienie domyślnych wartości parametrów, kiedy nie zostanie podana żadna zawartośc opisu listy, czyli to jest domyślny opis listy
      children: <p>I can do all the things!!!</p>
    }
    
    render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImgUrl={this.props.imgUrl} />
        <div className={styles.description}>
            {this.props.children}
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