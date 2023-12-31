import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import CreateTask from "./CreateTask";
import AffectAll from "./AffectAll";

function App() {
  const [list, setList] = useState([
    { id: uuid(), text: 'Read Chapter 3 & 4 ✏️', completed: false},
    { id: uuid(), text: 'Walk the dog 🐶', completed: false},
    { id: uuid(), text: 'Clean the bathroom 🤮', completed: false},
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setList([...list, { id: uuid(), text: input, completed: false }]);
      setInput("");
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleDelete = (taskID) => {
    const newList = list.filter((task) => {
      return task.id !== taskID;
    });
    setList(newList);
  };

  const handleComplete = (taskID) => {
    const newList = list.map((task) => {
      if (task.id === taskID) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setList(newList);
  };

  const clearAll = () => {
    setList([])
  }

  const completeAll = () => {
    const newList = list.map((task) => {
      return {...task, completed: true}
    })
  }

  return (
    <>
      <h1>Todo List</h1>
      <p>Created by Shayan Abedi</p>
      <CreateTask handleChange={handleChange} input={input} addTask={addTask} />
      <AffectAll clearAll={clearAll} />
      <TodoList
        list={list}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </>
  );
}

export default App;
