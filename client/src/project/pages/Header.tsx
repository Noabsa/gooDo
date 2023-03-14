import styled from "styled-components";

import { COLORS, FONTS, SIZES, PROPS } from "../common/styles";

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
      grid-row: 3/5;
      grid-column: 1/-1;
      align-items: center;
      justify-content: center;
      text-align: center;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: 100%;
      &--date-info {
        font-size: ${SIZES.l * PROPS.fontStandard}px;
        font-weight: 600;
      }
      &--moto {
        font-size: ${SIZES.xxl * PROPS.fontStandard * 1.2}px;
        font-family: ${FONTS.brand};
        font-weight: 600;
        margin: 8px 0 0 0;
        &-brand {
          text-decoration: underline;
          text-decoration-color: ${COLORS[theme].brand};
          text-decoration-thickness: 6px;
          margin: 0 0 0 -30px;
          font-weight: 800;
        }
      }
    }
  }
  @media (min-width: 500px) {
    .header {
      &__greeting--moto::before {
        content: "what you'll";
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
    </HeaderStyled>
  );
}
