import "./App.css";
import styled from "styled-components";

import { FONTS } from "./project/common/styles";
import { Header } from "./project/pages/Header";
import { TaskList } from "./project/tasks/TaskList";
import { Footer } from "./project/pages/Footer";
import { Body } from "./project/pages/Body";

const AppWrapper = styled.div`
  &.grid__col-8 {
    font-family: ${FONTS.app};
    font-weight: 400;
    min-width: 320px;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 280px auto 80px;
  }
`;
export const App = () => {
  return (
    <AppWrapper className="grid__col-8">
      <Header />
      <Body>
        <TaskList />
      </Body>
      <Footer />
    </AppWrapper>
  );
};
