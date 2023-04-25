import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const SignInStyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const SignInLeftSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.grey05};
  min-height: 100vh;
  width: 55%;
  padding: 0px 50px 0px 40px;
`;
export const SignInRightSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.white};
  padding: 50px 50px;
`;
