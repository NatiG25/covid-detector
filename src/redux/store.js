import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import cases from './detail';
import countries from './countries';

const rootReducer = combineReducers({
  cases,
  countries,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
