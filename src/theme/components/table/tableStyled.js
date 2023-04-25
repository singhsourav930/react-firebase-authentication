import styled from "styled-components";
import { COLORS } from "../../colors";
import { FONT_SIZES } from "../../fontSizes";

export const TableBox = styled.div`
  table {
    width: 100%;
  }
`;

export const TableHeading = styled.th`
  background: ${COLORS.grey04};
  padding: 10px;
  text-align: left;
  color: ${COLORS.black};
  &:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  &:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const TableData = styled.td`
  font-size:0.9rem;
  padding: 12px;
  border-bottom: 1px solid ${COLORS.grey03};
`;

export const TablePaginationBox = styled.td`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`;
