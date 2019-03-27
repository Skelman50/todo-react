import React from 'react';
import './app-header.css';

const AppHeader = ({ items }) => {
  const toDo = items.length;
  const done = items.filter(item => item.done).length;
  return (
    <div className="app-header d-flex">
      <h1>Todo list</h1>
      <h2>
        {toDo}
        {' '}
more to do,
        {' '}
        {done}
        {' '}
done
      </h2>
    </div>
  );
};

export default AppHeader;
