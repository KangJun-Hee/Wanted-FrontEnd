import React from "react";
import AList from "./aList";
import Form from "./Form";

function List({ todos, setTodos, filteredTodos }) {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <AList
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
