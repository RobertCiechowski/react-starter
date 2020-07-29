import { connect } from 'react-redux';
import Column from './Column';

/* stary mapStateToProps
const mapStateToProps = state => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  columns: state.columns,
});
*/

const mapStateToProps = (state, props) => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  cards: getCardsForColumn(state, props.id),
});

export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

export default connect(mapStateToProps)(Column); // odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa
// w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze