import React, { useRef, useEffect, useState } from "react";
import { TooltipBox, TooltipListBox } from "./tooltipStyled";

export const Tooltip = (props) => {
  const {
    list = [],
    activeTooltipId = "",
    closeActiveTooltipId = () => {},
    onSelect = () => {},
  } = props || {};

  const ref = useRef(null);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
    isDisplay: false,
  });

  useEffect(() => {
    const elem = document.getElementById(activeTooltipId);
    setPoints({
      isDisplay: true,
      x:
        window.scrollX +
          elem?.getBoundingClientRect().left +
          ref?.current?.offsetWidth >
        document.body.offsetWidth
          ? window.scrollX +
            elem?.getBoundingClientRect().left -
            (window.scrollX +
              elem?.getBoundingClientRect().left +
              ref?.current?.offsetWidth -
              document.body.offsetWidth +
              5)
          : window.scrollX + elem?.getBoundingClientRect().left,
      y:
        window.scrollY +
          elem?.getBoundingClientRect().top -
          ref?.current?.offsetHeight >
        0
          ? window.scrollY +
            elem?.getBoundingClientRect().top +
            elem?.offsetHeight
          : window.scrollY +
            elem?.getBoundingClientRect().top +
            elem?.offsetHeight,
    });
  }, [activeTooltipId, ref]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeActiveTooltipId("");
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeActiveTooltipId]);

  return (
    <TooltipBox ref={ref} points={points}>
      {activeTooltipId &&
        list &&
        list.map((data, index) => (
          <div key={index}>
            {(data?.render || data?.name || "") && (
              <TooltipListBox
                onClick={() => {
                  onSelect({ ...data, activeTooltipId });
                  closeActiveTooltipId("");
                }}
              >
                {data?.render || data?.name || ""}
              </TooltipListBox>
            )}
          </div>
        ))}
    </TooltipBox>
  );
};
