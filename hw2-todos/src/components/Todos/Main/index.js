function Main({ todos, setTodos, selected, setSelected }) {
  const markAll = () => {
    if (todos.some((todo) => todo.done === false)) {
      todos.forEach((todo) => {
        todo.done = true;
      });
    } else {
      todos.forEach((todo) => {
        todo.done = false;
      });
    }
    setTodos([...todos]);
  };

  const checkTodo = (todo) => {
    todos.map((item) => {
      if (item.text === todo.text) todo.done = !todo.done;
    });
    setTodos([...todos]);
  };

  const deleteTodo = (todo) => {
    todos = todos.filter((item) => {
      if (item.text !== todo.text) return true;
    });
    selected = selected.filter((item) => {
      if (item.text !== todo.text) return true;
    });
    setTodos([...todos]);
    setSelected([...selected]);
    console.log(todos);
  };

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={markAll}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {selected.map((todo, i) => (
          <li key={i} className={todo.done ? "completed" : ""}>
            <div className="view">
              <input
                key={i}
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onClick={() => checkTodo(todo)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
