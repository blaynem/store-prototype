import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import items from './items';

const rootReducer = combineReducers({categories, items, routing: routerReducer})

export default rootReducer;