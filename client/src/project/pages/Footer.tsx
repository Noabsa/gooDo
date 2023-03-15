import styled from "styled-components";
import { FONTS, COLORS } from "../common/styles";
import { Button } from "../common/components/Buttons";
const FooterStyles = styled.div`
  &.footer {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    & .section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: ${COLORS.black}90;
      &.buttons {
        align-items: flex-end;
      }
      span {
        font-family: ${FONTS.brand};
        font-weight: 800;
      }
      .button {
        margin: 0 4px;
      }
    }
  }
`;
export const Footer = () => {
  return (
    <FooterStyles className="footer">
      <section className="section buttons">
        <Button
          type="social"
          icon="envelope"
          iStyle="solid"
          size="x_l"
          onClick={() =>
            (window.location.href = "mailto:noelia.abalo@gmail.com")
          }
        />
        <Button
          type="social"
          icon="personalFile"
          iStyle="solid"
          size="x_l"
          onClick={() =>
            (window.location.href = "https://noabsa.github.io/Porfolio/")
          }
        />
        <Button
          type="social"
          icon="octocat"
          iStyle="solid"
          size="x_l"
          onClick={() => (window.location.href = "https://github.com/Noabsa")}
        />
        <Button
          type="social"
          icon="linkedin"
          iStyle="solid"
          size="x_l"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/noelia-abalo-sanchez/")
          }
        />
      </section>
      <section className="section moto">
        <span>gooDo&nbsp;</span>by<span>&nbsp;Nabsa</span>
      </section>
    </FooterStyles>
  );
};
