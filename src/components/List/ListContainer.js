import {connect} from 'react-redux';
import List from './List';

const mapStateToProps = state => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  columns: state.columns,
});

export default connect(mapStateToProps)(List); // odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa
// w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze