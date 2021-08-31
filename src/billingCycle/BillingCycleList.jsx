import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "../store/actions/billingCycleAction";

const BillingCycleList = (props) => {
  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mes</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

const mapsStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(BillingCycleList);
