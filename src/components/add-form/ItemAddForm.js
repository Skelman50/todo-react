import React, { Component } from 'react'
import './item-add-form.css'

class ItemAddForm extends Component {

    onchange = (e) => {
        const {addText} = this.props
        const {value} = e.target
        addText(value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {itemText, addItem, addText} = this.props
        const newItem = {
            label: itemText,
            done: false,
            important: false,
            id: Date.now()
        }
        if (itemText.length !== 0 && itemText.trim()) {
            addItem(newItem)
        }
        const value = ''
        addText(value)
    }

    render() {
       const {itemText} = this.props
          return (
            <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
            >
    
            <input type="text"
                   className="form-control new-todo-label"
                   placeholder="What needs to be done?" 
                   value={itemText}
                   onChange={this.onchange}
                   />
        
            <button type="submit"
                    className="btn btn-outline-secondary">Add</button>
          </form>
          );
    }
}


export default ItemAddForm