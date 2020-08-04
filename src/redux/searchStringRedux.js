// selectors
export const getSearchString = ({searchString}) => searchString; // funkcja getSearchString zwraca wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// Funkcja countVisibleCards będzie działała w ten sam sposób co countAllCards, musimy tylko dodać do niej filtrowanie kart za pomocą metody filter

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

