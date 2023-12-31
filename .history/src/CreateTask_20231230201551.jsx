import React, { useState } from "react";

const CreateTask = ({input, addTask, handleChange}) => {

  const [placeholder, setPlaceholder] = useState('add a todo task...')

  const handleFocus = () => {

  }

  return (
    <div className="create-task">
      <input
      maxLength='20'
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        placeholder="Add a task"
        type="text"
        onChange={handleChange}
        value={input}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
