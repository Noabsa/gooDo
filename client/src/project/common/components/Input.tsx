import styled from "styled-components";
import { useState } from "react";

import { COLORS, FONTS, SIZES, PROPS } from "../styles";
import { Task } from "../../tasks/taskUtils";
interface TaskInputProps {
  addTask?: any;
}

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: none;
  padding: 0 0 0 15px;
  font-family: ${FONTS.user};
  filter: drop-shadow(0 0 1px ${COLORS.black}40);
  ::placeholder {
    color: ${COLORS.black}50;
  }
  :hover {
    filter: drop-shadow(0 0 1px ${COLORS.black}80);
  }
  :focus {
    outline: none;
    filter: drop-shadow(0 0 2px ${COLORS.black}80);
  }
`;

const AddTaskInput = styled(InputStyled)<TaskInputProps>`
  color: ${COLORS.black}85;
  font-weight: 600;
  font-size: ${SIZES.m * PROPS.fontStandard}px;
  border-radius: 3px;
  width: 100%;
  background-color: white;
  margin: 0 72px 0 2px;
  filter: none;
  &::placeholder {
    color: ${COLORS.black}50;
  }
  :hover {
    background-color: ${COLORS.black}08;
    filter: none;
  }
  :focus {
    background-color: ${COLORS.black}12;
    filter: none;
  }
`;
const EditTaskInput = styled(InputStyled)<TaskInputProps>`
  border: none;
  height: calc(100% - 10px);
  border-radius: 3px;
  width: 100%;
  margin-right: 10px;
  background-color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 10px 0 0;
  filter: none;
  :hover {
    background-color: white;
    filter: drop-shadow(0 0 1px ${COLORS.black}60);
  }
  :focus {
    background-color: white;
    filter: drop-shadow(0 0 1px ${COLORS.black}95);
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
interface EditInputProps {
  task: Task;
  editTask: any;
  deleteTask: any;
}

export const EditInput = ({ task, editTask, deleteTask }: EditInputProps) => {
  let [newDescription, getNewDescription] = useState(task.description);
  const handleSubmit = (event) => {
    event.preventDefault();
    newDescription.length ? editTask(newDescription) : deleteTask();
  };
  return (
    <form onSubmit={handleSubmit}>
      <EditTaskInput
        value={newDescription}
        onChange={(event) => {
          getNewDescription(event.target.value);
        }}
      />
    </form>
  );
};
export const SearchInput = ({ setSearchValue }) => {
  let getSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputStyled
        onChange={getSearchValue}
        placeholder="Search here"
      ></InputStyled>
    </form>
  );
};
