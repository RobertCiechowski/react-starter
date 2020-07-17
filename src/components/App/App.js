import React from 'react'; // import biblioteki React
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component { // definicja klasy App. Klasa App dziedziczy z klasy React.Component
  render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello World!</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} imgUrl={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} />
      </main>
    )
  }
}

export default App; // export klasy App