import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link
      to={props.path}
      className="list-item pl-2 pr-8 mb-6 text-gray-500 hover:text-green-500 transition"
    >
      <li>{props.title}</li>
    </Link>
  );
};

export default MenuItem;
