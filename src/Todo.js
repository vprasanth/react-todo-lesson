import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodo] = useState([
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

  function markComplete(index) {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodo(newTodos);
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  function createNewTask(ev) {
    ev.preventDefault();
    // add new task to todos array
    setTodo([
      {
        task,
        done: false,
      },
      ...todos,
    ]);
    // clear input box
    setTask('');
  }

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <div>
        <ul>
          {todos.map((todo, idx) => (
            <li className={todo.done ? 'done' : ''} key={idx}>
              {todo.task}
              <button onClick={() => markComplete(idx)}>Done</button>
              <button onClick={() => deleteTask(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          name="task"
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
        />
        <button disabled={!task.trim() ? true : false} onClick={createNewTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
