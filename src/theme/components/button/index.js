import styled from "styled-components";

export const Button = styled.button`
  padding: ${(props) => props.theme.button.padding};
  font-size: ${(props) => props.theme.button.fontSize};
  font-weight: ${(props) => props.theme.button.fontWeight};
  border-radius: ${(props) => props.theme.button.borderRadius};
  width: ${(props) => props.theme.button.width};
  cursor: ${(props) => props.theme.button.cursor};
  border: ${(props) => props.theme.button.border};
  background: ${(props) =>
    props?.transparent ? "transparent" : props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.color};
  box-shadow: 3px 12px 24px rgba(125, 106, 166, 0.07);

  ${(props) =>
    props.large && `padding:${props.theme.button.primary.buttonLg.padding};`};

  ${(props) =>
    props.small && `padding:${props.theme.button.primary.buttonSm.padding};`};

  ${(props) =>
    props.primary &&
    `background-color:${
      props?.transparent
        ? "transparent"
        : props.theme.button.primary.backgroundColor
    };
      border:${props.theme.button.primary.border};
      color:${props.theme.button.primary.color};
    `};

  ${(props) =>
    props.secondary &&
    `background-color:${
      props?.transparent
        ? "transparent"
        : props.theme.button.secondary.backgroundColor
    };
    border:${props.theme.button.secondary.border};
           color:${props.theme.button.secondary.color};
           `};

  ${(props) =>
    props.outline &&
    `background-color:${
      props?.transparent
        ? "transparent"
        : props.theme.button.primary.outline.backgroundColor
    };
    border:${props.theme.button.primary.outline.border};
           color:${props.theme.button.primary.outline.color};
           `};

  ${(props) =>
    props.outline &&
    props.secondary &&
    `background-color:${
      props?.transparent
        ? "transparent"
        : props.theme.button.secondary.outline.backgroundColor
    };
            border:${props.theme.button.secondary.outline.border};
                   color:${props.theme.button.secondary.outline.color};
                   `};

  ${(props) =>
    props.disabled &&
    `background-color:${props.theme.button.disabled.backgroundColor};
                    border:${props.theme.button.disabled.border};
                           color:${props.theme.button.disabled.color};
                           cursor: ${props.theme.button.disabled.cursor};
                           `};
`;
