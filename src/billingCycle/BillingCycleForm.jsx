import React from "react";
import { reduxForm, Field } from "redux-form";

const BillingCycleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component="input" />
        <Field name="month" component="input" />
        <Field name="year" component="input" />
      </div>
      <div>
        <button
          type="submit"
          className="p-2 text-sm rounded bg-blue-700 text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);
