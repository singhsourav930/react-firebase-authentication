import React from "react";
import cx from "classnames";
import { TabBox, ListTabBox } from "./tabStyled";

export const Tab = ({ ...props }) => {
  const { tabs = [], activeTabName = "", setActiveTabName = () => {} } = props;
  return (
    <TabBox>
      {tabs.length > 0 &&
        tabs.map((data, index) => (
          <ListTabBox
            key={index}
            className={cx({ "active-tab": activeTabName === data?.tabName })}
            onClick={() => setActiveTabName(data?.tabName)}
          >
            {data?.tabName}
          </ListTabBox>
        ))}
    </TabBox>
  );
};
