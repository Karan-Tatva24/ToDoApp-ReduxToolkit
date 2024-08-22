import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Input from "./Input";
import Button from "./Button";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
        colorVariant="default"
      />
      <Button type="submit" size="md">
        Add Todo
      </Button>
    </form>
  );
}

export default AddTodo;
