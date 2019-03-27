import { combineReducers } from 'redux';
import items from './items';
import itemText from './itemText';
import searchText from './searchItem';
import itemsCollection from './itemsCollectiom';
import filter from './filter';

const rootReducer = combineReducers({
  items, itemText, searchText, itemsCollection, filter,
});

export default rootReducer;
