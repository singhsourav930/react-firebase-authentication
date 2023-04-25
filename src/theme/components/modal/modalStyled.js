import styled from "styled-components";
import { COLORS } from "../../colors";
import { FONT_SIZES } from "../../fontSizes";

export const ModalBox = styled.div`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;
    justify-content: end;
    z-index: 10;
    opacity: 0;
    transition: all 2s ease-in-out;
    pointer-event: none;
    padding: 20px 0px;
  }

  .modal.show {
    opacity: 1;
    pointer-event: visible;
  }
  .modal-content {
    overflow-y: auto;
    max-height: 90vh;
    min-height: 90vh;
    width: 100%;
    max-width: ${(props) => props?.maxWidth || "70"}%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: auto auto;
  }
  .modal-header,
  .modal-footer {
    padding: 5px;
  }
  .modal-title {
    margin: 0;
  }
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-close {
    padding: 5px;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;

    &:hover {
      background-color: ${COLORS.grey04};
    }
  }
  .modal-body {
    padding: 10px;
  }
`;
