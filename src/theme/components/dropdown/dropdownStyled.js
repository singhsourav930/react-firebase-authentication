import styled from "styled-components";

export const DropdownBox = styled.div`
  .react-dropdown-select {
    ${(props) => `border-radius:${props.theme.dropdown.borderRadius};`};

    ${(props) => `border:${props.theme.dropdown.border};`};
    ${(props) =>
      props.primary && `border:${props.theme.dropdown.primary.border};`};

    box-shadow: unset;
    &:focus-within {
      box-shadow: unset;
    }
    &:hover {
      ${(props) => `border:${props.theme.dropdown.hover.border};`};
      ${(props) =>
        props.isError && `border:${props.theme.dropdown.error.errorBorder};`};
    }
    ${(props) =>
      props.isError && `border:${props.theme.dropdown.error.errorBorder};`};
  }
`;

export const ErrorBox = styled.div`
  ${(props) => `color:${props.theme.dropdown.error.color};
  font-size:${props.theme.dropdown.error.fontSize};
  font-weight:${props.theme.dropdown.error.fontWeight};`};
`;
