import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const SignUpStyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const SignUpLeftSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.grey05};
  min-height: 100vh;
  width: 55%;
  padding: 0px 50px 0px 40px;
`;
export const SignUpRightSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.white};
  padding: 50px 50px;
`;
