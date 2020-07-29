import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';

class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
  /*
  state = { // definicja stanu komonentu List
    columns: this.props.columns || [], // jeśli this.props.columns nie zostało zdefiniowane, czyli komponent nie otrzymał propsa columns, 
    //to w this.state.columns znajdzie się pusta tablica [].
  }
  */

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

  /*
  addColumn(title){ // metoda AddColumn, która zmienia stan za pomocą metody this.setState
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  */

  render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    const { title, image, description, columns } = this.props;
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <section className={styles.component}>
        <Hero titleText={title} image={image} />

        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>

        <div className={styles.columns}>

          {/*<Column titleColumn={'Animals'} />
          <Column titleColumn={'Plants'} />
          <Column titleColumn={'Minerals'} /> // tu koniec komentarza w wąsach (ino te 3 kolumny)*/}

          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List; // export klasy List