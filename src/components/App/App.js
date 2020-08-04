import React from 'react'; // import biblioteki React
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component { // definicja klasy App. Klasa App dziedziczy z klasy React.Component
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    const {title, subtitle, lists} = this.props;
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <main className={styles.component}>
        {/* Stary kod nagłówków
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2> */}

        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        <Search />

        {/* Stary kod komponentu List
        <List title={['Things to do', <sup key='1'>soon!</sup>]} imgUrl={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} />*/}
        
        {/* Trochę młodszy, ale już stary kod komponentu List
        <List {...listData} />
        */}

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        
      </main>
    );
  }
}

export default App; // export klasy App