import React, { useEffect, useCallback } from "react";
import { Button } from "../button";
import CloseImg from "../../../assets/icons/close.svg";
import { ModalBox } from "./modalStyled";

export const Modal = (props) => {
  const {
    onClose = () => {},
    show = false,
    maxWidth = "",
    title = "",
    footer = "",
    children,
  } = props;

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }

  return (
    <ModalBox maxWidth={maxWidth}>
      <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <div className="modal-close" onClick={onClose}>
              <img src={CloseImg} alt="close" />
            </div>
          </div>
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </ModalBox>
  );
};
