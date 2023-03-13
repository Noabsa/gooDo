import styled from "styled-components";

import { COLORS, FONTS, SIZES, PROPS } from "../common/styles";

import { Input } from "../common/components/Input";
const theme = "light";

const HeaderStyled = styled.div`
  &.header {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  .header {
    &__greeting {
      grid-row: 2/4;
      grid-column: 1/-1;
      align-items: center;
      justify-content: center;
      text-align: center;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: 100%;
      &--date-info {
        grid-row: 1/2;
        font-size: ${SIZES.l * PROPS.fontStandard}px;
        font-weight: 600;
      }
      &--moto {
        grid-row: 2/-1;
        font-size: ${SIZES.xxl * PROPS.fontStandard * 1.2}px;
        font-family: ${FONTS.brand};
        font-weight: 600;
        &-brand {
          text-decoration: underline;
          text-decoration-color: ${COLORS[theme].brand};
          text-decoration-thickness: 6px;
          margin: 0 0 0 -30px;
          font-weight: 800;
        }
      }
    }
    &__info-search-bar {
      grid-row: 4/-1;
      grid-column: 2/-2;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, 1fr);
      &--tasks-info-bar {
        z-index: 1;
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
        margin: 20px 0 20px 0;
        border-radius: 50px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
        & .search-bar {
          &__custom-button {
            display: none;
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
            grid-row: 1/-1;
            grid-column: 1/-1;
            margin: 10px 20px 10px 90px;
          }
        }
      }
    }
  }
  @media (min-width: 500px) {
    .header {
      &__greeting--moto::before {
        content: "what you'll";
      }
      &__info-search-bar--tasks-info-bar label {
        transition: none;
        display: inline-block;
      }
    }
  }
  @media (min-width: 744px) {
    .header {
      &__info-search-bar {
        &--tasks-info-bar {
          transition: none;
          grid-row: 2/-1;
          grid-column: 1/3;
          align-self: center;
          justify-content: space-between;
          margin-left: 70px;
          width: 95px;
          & span {
            font-size: ${SIZES.m * PROPS.fontStandard}px;
          }
          & label {
            display: none;
          }
        }
        &--search-bar {
          .search-bar {
            &__input {
              margin-left: 190px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .header {
      &__info-search-bar {
        &--tasks-info-bar {
          width: 210px;
          & div {
            display: flex;
            align-items: center;
          }
          & label {
            display: inline-flex;
            font-size: ${SIZES.m * PROPS.fontStandard}px;
          }
        }
        &--search-bar {
          .search-bar {
            &__input {
              margin-left: 300px;
            }
          }
        }
      }
    }
  }
`;
export function Header() {
  let date = new Date();
  let today = {
    weekDay: date.toLocaleString("en-us", { weekday: "long" }),
    month: date.toLocaleString("en-us", { month: "long" }),
    day: date.getDate(),
    year: date.getFullYear(),
  };
  return (
    <HeaderStyled className="header">
      <div className="header__greeting">
        <p className="header__greeting--date-info">{`${today.weekDay}, ${today.month} ${today.day}, ${today.year}`}</p>
        <p className="header__greeting--moto">
          &nbsp;
          <span className="header__greeting--moto-brand">
            &nbsp;&nbsp; gooDo?
          </span>
        </p>
      </div>
      <div className="header__info-search-bar">
        <div className="header__info-search-bar--tasks-info-bar">
          <div>
            <span>1350</span> <label>&nbsp; tasks completed</label>
          </div>
          <span>· 100%</span>
        </div>
        <div className="header__info-search-bar--search-bar">
          <div className="search-bar__custom-button"></div>
          <div className="search-bar__input">
            <Input></Input>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}
