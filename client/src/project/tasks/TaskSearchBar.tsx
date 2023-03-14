import styled from "styled-components";
import { SearchInput } from "../common/components/Input";
import { useAppSelector } from "../common/state/store";
import { COLORS, SIZES, PROPS, FONTS } from "../common/styles";
let theme = "light";

const StyledInfoSearchBar = styled.div`
  &.info-search-bar {
    grid-row: 4/-1;
    grid-column: 2/-2;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 35px);
    margin: 0 0 40px 0;
  }
  .info-search-bar {
    &--tasks-info-bar {
      transition: none;
      grid-row: 1/2;
      grid-column: 2/-2;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      & label {
        display: none;
      }
      & span {
        font-family: ${FONTS.brand};
        font-weight: 800;
        font-size: ${SIZES.l * PROPS.fontStandard}px;
        margin: 0 0 0 5px;
      }
    }
    &--search-bar {
      grid-row: 2/-1;
      grid-column: 1/-1;
      box-shadow: 0px 0px 3px ${COLORS.black}10;
      filter: drop-shadow(0px 1px 1px ${COLORS[theme].hueR}80);
      background-color: ${COLORS.white};
      margin: 15px 0 0px 0;
      border-radius: 50px;
      display: flex;
      &__custom-button {
        background-color: ${COLORS.white};
        border: 2px solid ${COLORS[theme].hueR};
        grid-row: 1/-1;
        grid-column: 1/2;
        border-radius: 50%;
        height: 40px;
        aspect-ratio: 1;
        align-self: center;
        margin-left: 10px;
      }
      &__input {
        width: 100%;
        margin: 10px 20px 10px 25px;
      }
    }
  }

  @media (min-width: 500px) {
    .info-search-bar {
      &--tasks-info-bar {
        label {
          transition: none;
          display: inline-block;
        }
      }
    }
  }
  @media (min-width: 780px) {
    .info-search-bar {
      &--tasks-info-bar {
        z-index: 1;
        transition: none;
        grid-row: 2/-1;
        width: 100px;
        grid-column-start: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px 0 0 0;
        margin: 0 0 0 65px;
        & label {
          display: none;
        }
        & span {
          font-size: ${SIZES.m * PROPS.fontStandard}px;
        }
      }
      &--search-bar {
        &__input {
          width: 100%;
          margin-left: 130px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .info-search-bar {
      &--tasks-info-bar {
        width: 225px;
        & label {
          display: inline-block;
        }
      }
      &--search-bar {
        &__input {
          margin-left: 250px;
        }
      }
    }
  }
`;
export const TaskSearchBar = ({ setSearchValue }) => {
  const taskListArray = useAppSelector((state) => state.taskList);
  let totalTasks: number = taskListArray.length;
  let doneTasks: number = taskListArray.filter(
    (task) => task.marked === "active"
  ).length;
  let percent = Math.round(((doneTasks * 100) / totalTasks) * 10) / 10;
  return (
    <StyledInfoSearchBar className="info-search-bar">
      <div className="info-search-bar--tasks-info-bar">
        <div>
          <span>{taskListArray.length} ·</span>{" "}
          <label>tasks &nbsp;||&nbsp; completed</label>
        </div>
        <span>· {isNaN(percent) ? "0" : percent} %</span>
      </div>
      <div className="info-search-bar--search-bar">
        <div className="info-search-bar--search-bar__custom-button"></div>
        <div className="info-search-bar--search-bar__input">
          <SearchInput setSearchValue={setSearchValue} />
        </div>
      </div>
    </StyledInfoSearchBar>
  );
};
