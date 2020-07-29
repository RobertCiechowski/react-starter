import { connect } from 'react-redux';
import List from './List';

/* stary mapStateToProps
const mapStateToProps = state => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  columns: state.columns,
});
*/

const mapStateToProps = (state, props) => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  columns: getColumnsForList(state, props.id),
});

export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

export default connect(mapStateToProps)(List); // odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa
// w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze