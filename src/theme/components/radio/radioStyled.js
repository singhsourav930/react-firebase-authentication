import styled from "styled-components";

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabelOuter = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${(props) => `background:${props.theme.radio.backgroundColor}`};
  ${(props) => `border:${props.theme.radio.border}`};
  ${(props) =>
    props.disabled &&
    `background:${props.theme.radio.disabled.backgroundColor}`};
`;

export const RadioButtonLabel = styled.div`
  position: absolute;
  top: 25%;
  left: 0.5px;
  top: 0.5px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: none;
  ${(props) => `background:${props.theme.radio.backgroundColor};
  border:${props.theme.radio.circleBorder}`};

  ${(props) =>
    props.primary &&
    `background:${props.theme.radio.primary.backgroundColor};
  border:${props.theme.radio.primary.circleBorder}`};

  ${(props) =>
    props.secondary &&
    `background:${props.theme.radio.secondary.backgroundColor};
  border:${props.theme.radio.secondary.circleBorder}`};
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  ${(props) => props.disabled && `cursor:not-allowed;`};
  &:hover ~ ${RadioButtonLabelOuter} {
    border: ${(props) => props.theme.radio.hover.border};
    ${(props) =>
      props.primary && `border:${props.theme.radio.primary.hover.border}`};

    ${(props) =>
      props.secondary && `border:${props.theme.radio.secondary.hover.border}`};

    ${(props) =>
      props.disabled &&
      `border:${props.theme.radio.border}; 
      cursor: ${props.theme.radio.disabled.cursor};`};
  }

  &:checked + ${RadioButtonLabelOuter} {
    ${(props) =>
      `background:${props.theme.radio.checked.backgroundColor};
      border:${props.theme.radio.checked.border}`};

    ${(props) =>
      props.primary &&
      `background:${props.theme.radio.primary.checked.backgroundColor};
        border:${props.theme.radio.primary.checked.border}`};

    ${(props) =>
      props.secondary &&
      `background:${props.theme.radio.secondary.checked.backgroundColor};
            border:${props.theme.radio.secondary.checked.border}`};

    ${(props) =>
      props.disabled &&
      `background:${props.theme.radio.disabled.backgroundColor};
      border:${props.theme.radio.disabled.border};
      cursor: ${props.theme.radio.disabled.cursor};`};

    ${RadioButtonLabel} {
      ${(props) => `background:${props.theme.radio.checked.backgroundColor};`};

      ${(props) =>
        props.primary &&
        `background:${props.theme.radio.primary.checked.backgroundColor};`};

      ${(props) =>
        props.secondary &&
        `background:${props.theme.radio.secondary.checked.backgroundColor};`};

      display: block;
      ${(props) =>
        props.disabled &&
        `background:${props.theme.radio.disabled.backgroundColor};
        border:${props.theme.radio.circleBorder};
        cursor: ${props.theme.radio.disabled.cursor};`};
    }
  }
`;
