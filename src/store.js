// import { createStore, compose } from 'redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import categories from './data/categories';
import items from './data/items';

//create an object for the default data
const defaultState = {
	categories,
	items
}

// creating the store
const store = createStore(rootReducer, defaultState);

// creating the browsers history
export const history = syncHistoryWithStore(browserHistory, store);

export default store;