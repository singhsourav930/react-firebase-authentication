import styled from "styled-components";

export const MainComponentBox = styled.div`
  display: flex;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const ContentBox = styled.div`
  width: 100%;
  margin-left: 251px;
`;

export const ContentChildrenBox = styled.div`
  margin-top: 60px;
`;
