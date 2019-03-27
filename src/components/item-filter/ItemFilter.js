import React, { Component } from 'react';

class ItemFilter extends Component {

    onChangeFilter = (e) => {
        const { updateItems, itemsCollection, changeFilter } = this.props;

        switch (e.target.textContent) {
            case 'All':
                 changeFilter('all')
                 return updateItems(itemsCollection)
            case 'Active':
                 changeFilter('active')
                 const activeItems = itemsCollection.filter(item => !item.done)
                 return updateItems(activeItems)
            case 'Done':
                 changeFilter('done')
                 const doneItems = itemsCollection.filter(item => item.done)
                 return updateItems(doneItems)
            default:
                 changeFilter('all')
                 return updateItems(itemsCollection)
        };
    }


    render() {
        const { filter } = this.props
        return (
            <div className="btn-group">
                <button 
                onClick={this.onChangeFilter}
                type="button"
                className={filter === 'all' ? "btn btn-info" : "btn btn-outline-secondary"}
                >All</button>
                <button 
                onClick={this.onChangeFilter}
                type="button"
                className={filter === 'active' ? "btn btn-info" : "btn btn-outline-secondary"}
                >
                Active</button>
                <button 
                onClick={this.onChangeFilter}
                type="button"
                className={filter === 'done' ? "btn btn-info" : "btn btn-outline-secondary"}
                >Done</button>
            </div>
        )
    }
}

export default ItemFilter;