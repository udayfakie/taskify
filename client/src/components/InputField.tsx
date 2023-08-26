import React, { useRef } from "react";
import "./Styles.css";
import axios from "axios";
import { Todo } from "../model";
import { SERVER_URL } from "../utils/config.js";
interface Props {
  todo: string;
  completedTodos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const createTodo = () => {
    axios
      .post(`${SERVER_URL}/createdTodo`, {
        todo: todo,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
      });
  };

  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter a Task"
          className="input_box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={createTodo} className="input_submit">Go</button>
      
      </form>
      
    </>
  );
};

export default InputField;
