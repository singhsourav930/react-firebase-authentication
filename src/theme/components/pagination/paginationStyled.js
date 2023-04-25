import styled from "styled-components";
import { COLORS } from "../../colors";
import { FONT_SIZES } from "../../fontSizes";

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 10px 0px;
`;

export const PaginationItem = styled.div`
  margin: 0px 5px;
  font-size: ${FONT_SIZES.BODY_MEDIUM_1};
  min-width: 14px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 8px;
  &:hover {
    color: ${COLORS.grey01};
    img {
      opacity: 0.5;
    }
  }

  ${(props) =>
    props.active &&
    `background-color:${COLORS.blue};
      color:${COLORS.white} !important;
      box-shadow: 0px 4px 8px 2px ${COLORS.grey02};
    `};
`;

export const PaginationLink = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  .prevBtn {
    transform: rotate(180deg);
  }
  img {
    margin-bottom: -3px;
  }
`;
