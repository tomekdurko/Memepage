import { combineReducers } from 'redux';
import { memsReducer } from './memsReducer' ;

const rootReducer = combineReducers({
memsStore: memsReducer
});

export default rootReducer;