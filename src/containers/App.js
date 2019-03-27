import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import AppHeader from '../components/app-header';
import SearchPanel from '../components/search-panel';
import ItemFilter from '../components/item-filter';
import {
  updateItems, addText, addItem, searchItem, changeFilter, deleteItem, getSavedItems,
} from '../actions';
import ItemAddForm from '../components/add-form';


class App extends Component {
  componentDidUpdate() {
    const { itemsCollection } = this.props;
    const setStorage = JSON.stringify(itemsCollection);
    localStorage.setItem('items', setStorage);
  }

  componentDidMount() {
    const { updateItems, getSavedItems } = this.props;
    const getItems = localStorage.getItem('items');
    const items = JSON.parse(getItems);
    updateItems(items);
    getSavedItems(items);
  }


  render() {
    return (
      <div className="todo-app">
        <AppHeader {...this.props} />
        <SearchPanel {...this.props} />
        <ItemFilter {...this.props} />
        <TodoList {...this.props} />
        <ItemAddForm {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    itemText: state.itemText,
    searchText: state.searchText,
    itemsCollection: state.itemsCollection,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateItems: items => dispatch(updateItems(items)),
    addText: text => dispatch(addText(text)),
    addItem: item => dispatch(addItem(item)),
    searchItem: text => dispatch(searchItem(text)),
    changeFilter: type => dispatch(changeFilter(type)),
    deleteItem: items => dispatch(deleteItem(items)),
    getSavedItems: items => dispatch(getSavedItems(items)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
