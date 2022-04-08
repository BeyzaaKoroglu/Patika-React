import React, { useEffect, useState } from "react";

function Header({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setNewTodo("");
  }, [todos]);

  const onChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTodo === "") return false;

    setTodos([...todos, { text: newTodo, done: false }]);
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          value={newTodo}
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => onChange(e)}
        />
      </form>
    </div>
  );
}

export default Header;
