import styled from "styled-components";

export const TextAreaBox = styled.textarea`
  min-height: ${(props) => props.theme.textarea.minHeight};
  width: ${(props) => `calc(100% - 22px)`};
  max-width: ${(props) => props?.maxWidth || props.theme.textarea.maxWidth};
  font-size: ${(props) => props.theme.textarea.fontSize};
  border-radius: ${(props) => props.theme.textarea.borderRadius};
  border: ${(props) => props.theme.textarea.border};
  padding: ${(props) => props.theme.textarea.padding};
  outline-color: ${(props) => props.theme.textarea.outlineColor};
  resize: ${(props) => props.theme.textarea.resize};

  ${(props) =>
    props.disabled &&
    `background-color:${props.theme.textarea.disabled.backgroundColor};
    border:${props.theme.textarea.disabled.border};
           color:${props.theme.textarea.disabled.color};
           cursor: ${props.theme.textarea.disabled.cursor};
           `};

  ${(props) =>
    props.isError &&
    `outline-color:${props.theme.textarea.error.errorOutlineColor};
    border:${props.theme.textarea.error.errorBorder};`};
`;

export const ErrorBox = styled.div`
  ${(props) => `color:${props.theme.textarea.error.color};
  font-size:${props.theme.textarea.error.fontSize};
  font-weight:${props.theme.textarea.error.fontWeight};`};
`;

export const TextAreaLabel = styled.div`
  margin-bottom: 5px;
`;
