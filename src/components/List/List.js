import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
  render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <section className={styles.component}>
        <Hero />
      </section>
    )
  }
}

export default List; // export klasy List