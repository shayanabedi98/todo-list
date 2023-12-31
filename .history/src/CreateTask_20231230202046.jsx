import React, { useState } from "react";

const CreateTask = ({ input, addTask, handleChange }) => {
  const [placeholder, setPlaceholder] = useState(false);

  const handleFocus = () => {
    setPlaceholder(true);
  };

  const handleBlur = () => {
    setPlaceholder(false)
  }

  return (
    <div className="create-task">
      <input
        maxLength="20"
        onFocus={handleFocus}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder={placeholder ? "Max Characters: 20" : "Add a todo task..."}
        type="text"
        onChange={handleChange}
        value={input}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
