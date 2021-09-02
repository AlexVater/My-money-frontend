import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "../store/actions/billingCycleAction";

import Grid from "../components/layout/Grid";
import LabelAndInput from "../components/form/LabelAndInput";

let BillingCycleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid col={3} gap={2}>
        <Field
          name="name"
          component={LabelAndInput}
          label="Nome"
          placeholder="Informe o nome"
        />
        <Field
          name="month"
          component={LabelAndInput}
          label="Mes"
          type="number"
          placeholder="Informe o mes"
        />
        <Field
          name="year"
          component={LabelAndInput}
          label="Ano"
          type="number"
          placeholder="Informe o ano"
        />
      </Grid>
      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="p-2 text-sm rounded bg-gray-700 text-white hover:text-green-500"
        >
          Submit
        </button>
        <button
          type="button"
          className="p-2 text-sm rounded bg-gray-700 text-white hover:text-red-500"
          onClick={props.init}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
})(BillingCycleForm);

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);
