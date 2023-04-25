import styled from "styled-components";

export const SwitchBoxWrapper = styled.div`
  position: relative;
`;

export const SwitchBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 51px;
  height: 31px;

  ${(props) =>
    props.small &&
    `width:42px;
  height: 24px;`};

  border-radius: 15px;
  ${(props) => `background:${props.theme.switch.backgroundColor};`};
  ${(props) =>
    props.primary &&
    `background:${props.theme.switch.primary.backgroundColor};`};
  ${(props) =>
    props.secondary &&
    `background:${props.theme.switch.secondary.backgroundColor};`};

  ${(props) =>
    props.disabled &&
    `background:${props.theme.switch.disabled.backgroundColor};
    cursor: ${props.theme.switch.disabled.cursor};`};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: 3px;

    ${(props) =>
      props.small &&
      `width:18px;
    height: 18px;`};

    ${(props) => `background:${props.theme.switch.circle.backgroundColor};`};
    transition: 0.2s;
  }
`;

export const SwitchBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 51px;
  height: 31px;

  ${(props) =>
    props.small &&
    `width:42px;
  height: 24px;`};

  &:checked + ${SwitchBoxLabel} {
    ${(props) => `background:${props.theme.switch.backgroundColor};`};
    ${(props) =>
      props.primary &&
      `background:${props.theme.switch.primary.backgroundColor};`};

    ${(props) =>
      props.secondary &&
      `background:${props.theme.switch.secondary.backgroundColor};`};

    ${(props) =>
      props.disabled &&
      `background:${props.theme.switch.disabled.backgroundColor};
      cursor: ${props.theme.switch.disabled.cursor};`};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-left: 23px;
      transition: 0.2s;

      ${(props) =>
        props.small &&
        `width:18px;
      height: 18px;
      margin-left: 21px;`};
    }
  }
`;
