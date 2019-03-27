import './search-panel.css'
import React, { Component } from 'react';

class SearchPanel extends Component {

    onChange = (e) => {
        const { itemsCollection, searchItem, searchText, updateItems } = this.props
        const {value} = e.target
        searchItem(value) 
        const newItems = itemsCollection.filter(item => {
            return item.label.toLowerCase()
                   .indexOf(searchText.toLowerCase()) > -1
        })
        searchText.length - 1 === 0 ? updateItems(itemsCollection) : updateItems(newItems)
    }
  render() {
    return <input 
    onChange={this.onChange}
    className="form-control search-input"
    placeholder="search"></input>
}
  }


export default SearchPanel;