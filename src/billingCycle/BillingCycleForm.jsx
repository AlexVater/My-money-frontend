import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "../store/actions/billingCycleAction";

import Grid from "../components/layout/Grid";
import LabelAndInput from "../components/form/LabelAndInput";
import ItemList from "./ItemList";

let BillingCycleForm = (props) => {
  const { handleSubmit, readOnly, credits, debts } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid col={3} gap={2}>
        <Field
          name="name"
          component={LabelAndInput}
          label="Nome"
          placeholder="Nome"
          readOnly={readOnly}
        />
        <Field
          name="month"
          component={LabelAndInput}
          label="Mes"
          type="number"
          placeholder="Mes"
          readOnly={readOnly}
        />
        <Field
          name="year"
          component={LabelAndInput}
          label="Ano"
          type="number"
          placeholder="Ano"
          readOnly={readOnly}
        />
      </Grid>
      <div className="mt-4 border-b-2 border-gray-200" />
      <Grid col={2} gap={28}>
        <ItemList
          col={3}
          list={credits}
          readOnly={readOnly}
          field="credits"
          title="Créditos"
        />
        <ItemList
          col={3}
          list={debts}
          readOnly={readOnly}
          field="debts"
          title="Débitos"
          showStatus={true}
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
  destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");

const mapsStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(BillingCycleForm);
