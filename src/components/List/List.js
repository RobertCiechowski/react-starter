import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
  state = { // dodanie stanu komponentu za pomocą własciwości
    columns: this.props.columns || [],
  }

  static propTypes = { // definicja typów propsów
    title: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
    //children: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
    image: PropTypes.node,
    description: PropTypes.node, // deklaracja typów z dataStore
    columns: PropTypes.array, // deklaracja typów z dataStore
  }

  static defaultProps = { // ustawienie domyślnych wartości parametrów, kiedy nie zostanie podana żadna zawartośc opisu listy, czyli to jest domyślny opis listy
    //children: <p>I can do all the things!!!</p>
    description: settings.defaultListDescription, // nowa domyślna wartość propsów
  }

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.lenght ? state.columns[state.columns.lenght-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
    const {title, image, description, columns, addColumn} = this.props;
    return ( // metoda render zwraca obiekt JSX, a konkretniej div
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {/*<Column titleColumn={'Animals'} />
          <Column titleColumn={'Plants'} />
          <Column titleColumn={'Minerals'} />*/}
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    )
  }
}

export default List; // export klasy List