import React, { useState } from "react";

export default function Lists({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEditChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div
        className={`
        flex item-center justify-betweenw-full px-4 py-1 my-2 bg-gray-100 text-gray-600  border rounded`}
      >
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              value={editTitle}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />
          </form>

          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setEditTitle[false]}
            >
              x
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 float-right"
              // onClick={() => setIsEditing(true)}
            >
              save
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex item-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
          />
          <span className={completed ? "line-through" : undefined}>
            {" "}
            {title}
          </span>

          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
