import React from "react";
import trash from "./assets/trash.png";
import check from "./assets/check.png";

const TodoList = ({ handleComplete, handleDelete, list }) => {
  const completedStyle = (condition) => {
    return condition
      ? {
          color: "grey",
          textDecoration: "line-through",
        }
      : {};
  };

  return (
    <div className="list">
      <ul>
        {list.map((task) => {
          return (
            <li key={task.id}>
              <span style={completedStyle(task.completed)}>{task.text}</span>
              <button id="complete" onClick={() => handleComplete(task.id)}>
                <img src={check} alt="checkmark button"/>
              </button>
              <button id="delete" onClick={() => handleDelete(task.id)}>
                <img src={trash} alt="delete button"/>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
