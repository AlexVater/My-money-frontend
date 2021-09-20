import React from "react";
import If from "../components/operator/If";

const AuthInput = (props) => (
  <If test={!props.hide}>
    <div>
      <label
        htmlFor={props.name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {props.label}
      </label>
      <input
        {...props.input}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </If>
);

export default AuthInput;
