import styled from "styled-components";
import { FONTS, COLORS } from "../common/styles";
import { Button } from "../common/components/Buttons";
const FooterStyles = styled.div`
  &.footer {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    & section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: ${COLORS.black}90;
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
      <section>
        <Button type="social" icon="share" iStyle="duo" size="xl" />
        <Button type="social" icon="fork" iStyle="duo" size="xl" />
        <Button type="social" icon="octocat" iStyle="solid" size="xl" />
        <Button type="social" icon="linkedin" iStyle="solid" size="xl" />
      </section>
      <section>
        <span>gooDo&nbsp;</span>by<span>&nbsp;Nabsa</span>
      </section>
    </FooterStyles>
  );
};
