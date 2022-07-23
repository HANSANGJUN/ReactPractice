import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import Lists from "./Lists";

export default function List({ todoData, setTodoData, handleClick }) {
  const handeEnd = (result) => {
    if (!result.destination) return;
    const newTodoData = todoData;

    //1. 변경시키는 아이템을 배열에서 지워줍니다
    //2. return 값으로 지워진 아이템을 잡아줍니다
    const [reorderItem] = newTodoData.splice(result.source.index, 1);

    //원하는 자리에 reorderItem을 insert 해줍니다
    newTodoData.splice(result.destination.index, 0, reorderItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handeEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Lists
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
