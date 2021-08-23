import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link
      to={props.path}
      className="list-item pl-4 pr-12 py-1 my-6 text-gray-500 hover:text-green-500 transition"
    >
      <li className="">{props.title}</li>
    </Link>
  );
};

export default MenuItem;
