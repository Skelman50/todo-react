import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({ items, updateItems, deleteItem }) => (
  <ul className="list-group todo-list">
    {
     items.map(item => (
       <li key={item.id} className="list-group-item">
         <TodoListItem
           label={item.label}
           done={item.done}
           id={item.id}
           items={items}
           important={item.important}
           updateItems={updateItems}
           deleteItem={deleteItem}
         />
       </li>
     ))
 }
  </ul>
);

export default TodoList;
