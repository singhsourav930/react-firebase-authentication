import styled from "styled-components";

export const InputBox = styled.input`
  min-height: ${(props) => props.theme.input.minHeight};
  width: ${(props) => `calc(100% - 22px)`};
  max-width: ${(props) => props?.maxWidth || props.theme.input.maxWidth};
  font-size: ${(props) => props.theme.input.fontSize};
  border-radius: ${(props) => props.theme.input.borderRadius};
  border: ${(props) => props.theme.input.border};
  padding: ${(props) => props.theme.input.padding};
  outline-color: ${(props) => props.theme.input.outlineColor};

  ${(props) =>
    props.disabled &&
    `background-color:${props.theme.input.disabled.backgroundColor};
    border:${props.theme.input.disabled.border};
           color:${props.theme.input.disabled.color};
           cursor: ${props.theme.input.disabled.cursor};
           `};

  ${(props) =>
    props.isError &&
    `outline-color:${props.theme.input.error.errorOutlineColor};
    border:${props.theme.input.error.errorBorder};`};
`;

export const ErrorBox = styled.div`
  ${(props) => `color:${props.theme.input.error.color};
  font-size:${props.theme.input.error.fontSize};
  font-weight:${props.theme.input.error.fontWeight};`};
`;

export const InputLabel = styled.div`
  margin-bottom: 5px;
  font-size:0.9rem;
`;
