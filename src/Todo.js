import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([
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
    setTodos([
      {
        task,
        done: false,
      },
      ...todos,
    ]);
    // clear input box
    setTask('');
  }

  function markComplete(index) {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], done: true };
    setTodos(newTodos);
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div>
        <input
          name="task"
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
        />
        <button onClick={handleAddClick}>add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, idx) => (
            <li className={`${todo.done ? 'done' : ''}`} key={idx}>
              {todo.task} <button onClick={() => markComplete(idx)}>✔️</button>
              <button onClick={() => deleteTask(idx)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
