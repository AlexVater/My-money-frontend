import React from "react";

const TabsHeader = (props) => {
  return <ul className="w-50 flex bg-gray-200 rounded-sm">{props.children}</ul>;
};

export default TabsHeader;
