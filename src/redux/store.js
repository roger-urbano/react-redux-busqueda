import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

// Reducer principal (combinacion de todos los reducers)
const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
})

// Creando store
const store = createStore(reducer);

export default store;