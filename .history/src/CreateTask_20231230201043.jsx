import React from "react";

const CreateTask = ({input, addTask, handleChange}) => {
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
