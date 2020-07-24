import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({ // w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem
  title: state.app.title,
  subtitle: state.app.subtitle,
});

export default connect(mapStateToProps)(App); // odpowiedzialne za połączenie komponentu App z magazynem, czyli sprawia, że wszystko działa