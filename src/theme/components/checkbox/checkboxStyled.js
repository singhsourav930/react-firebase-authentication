import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  label {
    display: flex;
    vertical-align: middle;
    align-items: center;
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  margin-top: -5px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  min-width: 24px;
  width: 24px;
  min-height: 24px;
  height: 24px;
  border-radius: 3px;
  transition: all 150ms;
  ${(props) => `border:${props.theme.checkbox.border};`};
  ${(props) =>
    props.checked &&
    `background:${props.theme.checkbox.checked.backgroundColor};`};

  ${(props) =>
    props.primary && `border:${props.theme.checkbox.primary.border};`};

  ${(props) =>
    props.checked &&
    props.primary &&
    `background:${props.theme.checkbox.primary.checked.backgroundColor};`};

  ${(props) =>
    props.secondary && `border:${props.theme.checkbox.secondary.border};`};

  ${(props) =>
    props.checked &&
    props.secondary &&
    `background:${props.theme.checkbox.secondary.checked.backgroundColor};`};

  &:hover {
    ${(props) => `border:${props.theme.checkbox.hover.border};`};

    ${(props) =>
      props.primary && `border:${props.theme.checkbox.primary.hover.border};`};

    ${(props) =>
      props.secondary &&
      `border:${props.theme.checkbox.secondary.hover.border};`};

    ${(props) =>
      props.disabled &&
      `border:${props.theme.checkbox.disabled.border}; 
      cursor: ${props.theme.checkbox.disabled.cursor};`};
  }

  ${(props) =>
    props.disabled &&
    `border:${props.theme.checkbox.disabled.border};
    background:${props.theme.checkbox.disabled.backgroundColor};
    cursor: ${props.theme.checkbox.disabled.cursor};`};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CheckboxLabel = styled.div`
  margin-left: 8px;
`;
