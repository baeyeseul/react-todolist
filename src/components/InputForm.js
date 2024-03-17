import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  position: relative;
  margin-top: 20px;
  width: 100%;
  svg {
    width: 20px;
    height: 20px;
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 6px;
    left: 6px;
  }
`;

const TodoInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding-left: 30px;
`;

function InputForm({ setGroup }) {
  const [newTodo, setNewTodo] = useState("");

  const inputAddHandler = (e) => {
    const addTodo = e.target.value;
    setNewTodo(addTodo);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newObj = { check: false, todo: newTodo, id: Date.now() };
    setGroup((oldGroup) => {
      return [...oldGroup, newObj];
    });
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>

      <TodoInput
        type="text"
        value={newTodo}
        placeholder="Please enter your ToDo List"
        onChange={inputAddHandler}
        id="addinput"
      />
    </Wrapper>
  );
}

export default InputForm;
