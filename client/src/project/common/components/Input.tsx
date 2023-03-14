import styled from "styled-components";
import { useState } from "react";

import { COLORS, FONTS, SIZES, PROPS } from "../styles";

const theme = "light";

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0 50px 50px 0;
  border: none;
  border-left: 1px solid ${COLORS[theme].hueR};
  padding: 0 0 0 15px;
  font-family: ${FONTS.user};
  z-index: 12;
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
interface TaskInputProps {
  addTask?: any;
}
const AddTaskInput = styled(InputStyled)<TaskInputProps>`
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
    taskDescription.length > 0 && addTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSumit}>
      <AddTaskInput
        placeholder="Enter your task here"
        onChange={getTaskDescription}
        value={taskDescription}
      />
    </form>
  );
};
export const SearchInput = ({ setSearchValue }) => {
  let getSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form>
      <InputStyled onChange={getSearchValue}></InputStyled>
    </form>
  );
};
