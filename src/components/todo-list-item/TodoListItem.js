import React, { Component } from 'react'
import './todo-list-item.css'

class TodoListItem extends Component {

    onLabelClick = () => {
        const { updateItems, id, items } = this.props
        const newItems = [...items]
        const idx = newItems.findIndex(a => id === a.id)
        let {done} = newItems[idx]
        done = !done
        newItems[idx].done = done
        updateItems(newItems)
    }

    onMarkImportant = () => {
        const { updateItems, id, items } = this.props
        const newItems = [...items]
        const idx = newItems.findIndex(a => id === a.id)
        let { important } = newItems[idx]
        important = !important
        newItems[idx].important = important
        updateItems(newItems)
    }

    onDeleteItem = () => {
        const { deleteItem, id, items } = this.props
        const newItems = items.filter(item => id !== item.id)
        deleteItem(newItems)
    }


    render() {
        const { label, important, done } = this.props
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
          };

          let classNames = 'todo-list-item'
          if (done) {
              classNames += ' done'
          }
        
          return (
            <span className={classNames}>
              <span
                className="todo-list-item-label"
                style={style}
                onClick={this.onLabelClick}
                >
                {label}
              </span>
        
              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={this.onMarkImportant}
                      >
                <i className="fa fa-exclamation" />
              </button>
        
              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={this.onDeleteItem}
                      >
                <i className="fa fa-trash-o" />
              </button>
            </span>
          );
    }
}


export default TodoListItem