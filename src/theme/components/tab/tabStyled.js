import styled from "styled-components";
import { COLORS } from "../../colors";
import { FONT_SIZES } from "../../fontSizes";
import { FONT_WEIGHTS } from "../../fontWeights";

export const TabBox = styled.div`
  display: flex;
  color: ${COLORS.black};
  justify-content: center;
  .active-tab {
    color: ${COLORS.blue};
    font-weight: ${FONT_WEIGHTS[600]};
    border-bottom: 3px solid ${COLORS.blue};
  }
`;

export const ListTabBox = styled.div`
  font-size: ${FONT_SIZES.BODY_MEDIUM_1};
  padding: 7px 0px;
  margin: 0px 15px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
`;
