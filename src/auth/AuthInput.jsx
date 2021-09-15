import React from "react";
import If from "../components/operator/If";

const AuthInput = (props) => (
  <If test={!props.hide}>
    <div className="form-group has-feedback">
      <input
        {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </If>
);

export default AuthInput;
