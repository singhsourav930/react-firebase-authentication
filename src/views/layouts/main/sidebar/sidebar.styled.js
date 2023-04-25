import styled from "styled-components";
import { COLORS } from "../../../../theme/colors";
import { FONT_SIZES } from "../../../../theme/fontSizes";
import { FONT_WEIGHTS } from "../../../../theme/fontWeights";

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 18px;
  margin-bottom: 20px;
  position: relative;
  .sidebarLeftIcon {
    position: absolute;
    right: 10px;
    top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background: ${COLORS.grey05};
    }
  }
`;

export const SidebarContentBox = styled.div``;

export const SidebarContentUpper = styled.div`
  height: calc(100vh - 80px);
  overflow-y: auto;
  position: relative;
`;

export const SidebarComponentBox = styled.div`
  width: 250px;
  background: ${COLORS.white};
  border-right: 2px solid ${COLORS.grey03};
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const ListDataBox = styled.div`
  font-size: ${FONT_SIZES.BODY_MEDIUM_1};
  color: ${COLORS.grey01};
  display: block;
  text-decoration: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px;
  .listDataLeftSide {
    display: flex;
    align-items: center;
  }
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    background: ${COLORS.lightBlue2};
    color: ${COLORS.blue};
  }
  .listDataLeftSideUpdownArrow {
    animation: slideup 0.5s linear;
    transform: rotate(180deg);
  }
  @keyframes slideup {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export const ListBox = styled.div`
  padding: 0px 18px;
  ${(props) => props.isChildren && `padding: 0px 0px 0px 18px;`};
  a {
    color: ${COLORS.blue};
    display: block;
    text-decoration: unset;
  }
  .sidebarListIcon {
    margin-right: 8px;
  }
  .sideBaractive {
    font-weight: ${FONT_WEIGHTS[600]};
    background: ${COLORS.lightBlue2};
    color: ${COLORS.blue};
    border-radius: 10px;
    .listDataLeftSide {
      color: ${COLORS.blue};
    }
    .sidebarListIcon {
      fill: ${COLORS.blue};
      path[stroke] {
        stroke: ${COLORS.white};
      }
    }
  }
`;
