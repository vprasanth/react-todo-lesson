import React, { useState } from 'react';

function Todo() {
  const [task, addTask] = useState('');
  const [todos, addTodo] = useState([
    {
      task: 'wash car',
      done: false,
    },
    {
      task: 'take garbage out',
      done: false,
    },
    {
      task: 'wash dishes',
      done: false,
    },
  ]);

  function handleAddClick(ev) {
    ev.preventDefault();
    // add new task to todos array
    addTodo([
      {
        task,
        done: false,
      },
      ...todos,
    ]);
    // clear input box
    addTask('');
  }

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo.task}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          name="task"
          value={task}
          onChange={(ev) => addTask(ev.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default Todo;
