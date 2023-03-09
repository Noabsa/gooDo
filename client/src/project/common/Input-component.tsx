import styled from "styled-components";
import { useState } from "react";

import { COLORS, FONTS, SIZES, PROPS } from "../../styles/styles";
import { tasksArray } from "../tasks/Task-static";
const theme = "light";

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0 50px 50px 0;
  border: none;
  border-left: 1px solid ${COLORS[theme].hueR};
  padding: 0 0 0 15px;
  font-family: ${FONTS.user};
  :hover {
    background: linear-gradient(90deg, white 95%, transparent 95%);
    filter: drop-shadow(-1px 1.5px 1px ${COLORS.black}20);
  }
  :focus {
    outline: none;
    background: linear-gradient(90deg, white -50%, transparent 95%);
    filter: drop-shadow(-1px 1px 1px ${COLORS.black}30);
  }
`;
export const Input = () => {
  return <InputStyled></InputStyled>;
};

interface TaskInputProps {
  addTask?: any;
}
const TaskInputStyled = styled(InputStyled)<TaskInputProps>`
  border-left: none;
  color: ${COLORS.black}85;
  font-weight: 600;
  font-size: ${SIZES.m * PROPS.fontStandard}px;
  &::placeholder {
    color: ${COLORS.black}50;
  }
`;
export const TaskInput = ({ addTask }: TaskInputProps) => {
  let [taskDescription, setTaskDescription] = useState("");

  let getTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleSumit = (event) => {
    event.preventDefault();
    addTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <form style={{ height: "100%" }} onSubmit={handleSumit}>
      <TaskInputStyled
        placeholder="Enter your task here"
        onChange={getTaskDescription}
        value={taskDescription}
      />
    </form>
  );
};
