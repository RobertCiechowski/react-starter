import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCards } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const inputString = props.match.params.id;
  return {
    cards: getCards(state, inputString),
  };
};

export default connect(mapStateToProps)(SearchResults);