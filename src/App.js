import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './Main';

// maps anything living in our state to this.store.(categores/items)
function mapStateToProps(state){
	return {
		categories: state.categories,
		items: state.items
	}
}

// passing the actions creators via props i.e. '$r.store.dispatch()'
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;