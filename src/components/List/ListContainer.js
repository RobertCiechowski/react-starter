import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../../src/redux/columnsRedux.js';

/* stary mapStateToProps
const mapStateToProps = state => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  columns: state.columns,
});
*/

const mapStateToProps = (state, props) => { // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

/* 
export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);
*/

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List); // odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa
// w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze