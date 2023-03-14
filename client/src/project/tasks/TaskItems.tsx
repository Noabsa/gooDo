import styled from "styled-components";

import { Button } from "../common/components/Buttons";
import { TaskInput } from "../common/components/Input";
import { useAppDispatch, useAppSelector } from "../common/state/store";
import { COLORS, FONTS, SIZES, PROPS } from "../common/styles";
import { taskListActions } from "./taskAccions";
import { Task } from "./taskUtils";

let theme = "light";
interface TaskListHeaderProps {
  counter?: number;
}
const TaskListHeaderStyled = styled.div<TaskListHeaderProps>`
  &.taskList-header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${COLORS[theme].hueR}40;
    height: 64px;
    box-shadow: 0px 1px 0px ${COLORS.black}20;
    & .counter {
      position: relative;
      display: flex;
      align-items: center;
      height: 45px;
      aspect-ratio: 1;
      margin: 0 20px 0 8px;
      span {
        width: 100%;
        text-align: center;
        font-family: ${FONTS.brand};
        font-size: ${SIZES.m * PROPS.fontStandard}px;
        font-weight: 600;
        opacity: 0.8;
      }
      svg {
        transform: rotate(-90deg);
        position: absolute;
        height: 45px;
        aspect-ratio: 1;
        fill-opacity: 0;
        stroke-width: 5px;
        stroke: ${COLORS[theme].hueR};
        stroke-dasharray: calc((110 - (110 * ${"0"} / 100)));
        stroke-linecap: round;
      }
    }
    & label {
      margin: 3px 10px 0 -2px;
      font-weight: 600;
      color: ${COLORS.black}85;
      font-size: ${SIZES.m * PROPS.fontStandard}px;
    }
  }
`;
export const TaskListHeader = ({ counter }: TaskListHeaderProps) => {
  return (
    <TaskListHeaderStyled className="taskList-header">
      <div className="counter">
        <span>{counter}</span>
        <svg viewBox="0 0 0 -40">
          <circle cx="22" cy="22" r="18"></circle>
        </svg>
      </div>
      <label>Task Description</label>
    </TaskListHeaderStyled>
  );
};
interface TaskListItemProps {
  task: Task;
  key: number;
}
const TaskItemStyled = styled.div`
  &.taskList-item {
    font-family: ${FONTS.user};
    font-size: ${SIZES.m * PROPS.fontStandard}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    border-bottom: 1px solid ${COLORS.black}20;
    padding: 0 0 0 15px;
    & .button {
      margin: 0 3px 0 3px;
    }
    & section {
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0 10px 0 0;
      :first-of-type {
        width: calc(100% - 100px);
        margin: 0 0 0 15px;
        .counter {
          display: flex;
          font-size: ${SIZES.s * PROPS.fontStandard}px;
          font-weight: bolder;
          color: ${COLORS.black}80;
          padding: 3px 0 0 0;
          font-family: ${FONTS.app};
          margin: 0 -6px 0 0;
          cursor: default;
        }
        p {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${COLORS.black};
          margin: 0 10px 0 5px;
        }
      }
    }
  }
`;
export const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleToggleState = (property: keyof Task) => {
    dispatch(taskListActions.markTask(task.index, property));
    console.log(task);
  };

  return (
    <TaskItemStyled className="taskList-item">
      <Button
        type="checkTask"
        icon="checkedButton"
        iStyle="duo"
        size="m"
        state={task.marked}
        onClick={() => handleToggleState("marked")}
      />
      <section>
        {/* ----------  PREPARED BUT NOT SHOWN ---------- */}
        <>
          <div style={{ display: "none" }}>
            <span className="counter">
              34
              <Button
                type="static"
                icon="subtask"
                iStyle="solid"
                size="xs"
                state={""}
              ></Button>
            </span>
            <Button
              type="icon"
              icon="caret"
              iStyle="solid"
              size="s"
              transform="rotate"
              state={""}
            ></Button>
          </div>
        </>
        {/* ----------  ---------------------- ---------- */}
        <p>{`${task.description}`}</p>
      </section>
      <section>
        <Button
          type="icon"
          icon="flag"
          iStyle="duo"
          size="s"
          state={task.priority}
          onClick={() => handleToggleState("priority")}
        ></Button>
        {/*<Button type="icon" icon="trash" iStyle="duo" size="s"></Button>*/}
      </section>
    </TaskItemStyled>
  );
};

interface TaskItemAdderProps {
  addTask?: any;
}
const TaskItemAdderStyled = styled(TaskItemStyled)<TaskItemAdderProps>`
  &.taskList-item {
    justify-content: flex-start;
    & .button {
      opacity: 0.5;
    }
  }
  .taskList-item {
    &__form-input {
      width: 100%;
      height: 100%;
      padding: 5px 0 5px 12px;
    }
  }
`;
export const TaskListAdderItem = ({ addTask }: TaskItemAdderProps) => {
  return (
    <TaskItemAdderStyled className="taskList-item">
      <Button type="static" icon="checkedButton" iStyle="duo" size="m" />
      <div className="taskList-item__form-input">
        <TaskInput addTask={addTask}></TaskInput>
      </div>
    </TaskItemAdderStyled>
  );
};
