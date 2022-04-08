import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import MainFooter from "./MainFooter";

function Todos() {
  const [todos, setTodos] = useState([
    {
      done: true,
      text: "Taste JavaScript",
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);

  const [selected, setSelected] = useState([...todos]);

  return (
    <div className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <Main
        todos={todos}
        setTodos={setTodos}
        selected={selected}
        setSelected={setSelected}
      />
      <MainFooter
        todos={todos}
        setTodos={setTodos}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Todos;
