import React from "react";

const LabelAndInput = (props) => {
  return (
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
  );
};

export default LabelAndInput;
