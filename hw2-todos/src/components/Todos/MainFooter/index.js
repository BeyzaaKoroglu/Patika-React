import React from "react";

function MainFooter({ todos, setTodos, selected, setSelected }) {
  const selectAll = () => {
    setSelected([...todos]);
  };

  const selectActive = () => {
    setSelected([
      ...todos.filter((todo) => {
        if (todo.done == false) return true;
      }),
    ]);
  };

  const selectCompleted = () => {
    setSelected([
      ...todos.filter((todo) => {
        if (todo.done == true) return true;
      }),
    ]);
  };

  const isHidden = () => {
    if (todos.some((todo) => todo.done === false)) return true;
    else return false;
  };

  const clearCompleted = () => {
    console.log(todos);
    todos = todos.filter((todo) => {
      if (todo.done == false) return true;
    });

    selected = selected.filter((todo) => {
      if (todo.done == false) return true;
    });

    setTodos([...todos]);
    setSelected([...selected]);
    console.log(todos);
  };

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{selected.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a onClick={selectAll}>All</a>
        </li>
        <li>
          <a onClick={selectActive}>Active</a>
        </li>
        <li>
          <a onClick={selectCompleted}>Completed</a>
        </li>
      </ul>

      <button
        hidden={isHidden}
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default MainFooter;
