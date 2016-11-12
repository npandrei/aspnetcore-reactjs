import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { calculateReducer } from './calculate.js';

const reducer = combineReducers({
    routing: routerReducer,
    calculate: calculateReducer
});

export default reducer;