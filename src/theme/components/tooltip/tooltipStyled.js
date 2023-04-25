import styled from "styled-components";
import { COLORS } from "../../colors";

export const TooltipBox = styled.div`
  background: ${COLORS.white};
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  position: absolute;
  ${(props) => `left:${props.points.x}px;
  top:${props.points.y}px`};
  z-index: 1;
`;

export const TooltipListBox = styled.div`
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
`;
