import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const StoredData: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setComletedTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    const savedCompletedTodos = localStorage.getItem("completedTodos");
    if (savedCompletedTodos) {
      setComletedTodos(JSON.parse(savedCompletedTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { _id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setComletedTodos(complete);
    setTodos(active);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <InputField
            todo={todo}
            setTodo={setTodo}
            setTodos={setTodos}
            handleAdd={handleAdd}
            completedTodos={completedTodos}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setComletedTodos={setComletedTodos}
          />
        </div>
      </DragDropContext>
    </>
  );
};

export default StoredData;
