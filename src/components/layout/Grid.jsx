import React from "react";

const Grid = (props) => {
  return (
    <div className={`grid grid-cols-${props.col} gap-${props.gap}`}>
      {props.children}
    </div>
  );
};

export default Grid;
