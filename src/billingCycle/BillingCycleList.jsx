import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "../store/actions/billingCycleAction";
import { useEffect } from "react";

const BillingCycleList = (props) => {
  useEffect(() => {
    props.getList();
  }, []);

  function renderRows() {
    let list = props.list || [];
    return list.map((blc, key) => {
      return (
        <tr key={key}>
          <td>{blc.name}</td>
          <td>{blc.month}</td>
          <td>{blc.year}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="min-w-full">
        <thead className="text-left border-b-2 border-gray-900">
          <tr>
            <th>Nome</th>
            <th>Mes</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody className="mt-3">{renderRows()}</tbody>
      </table>
    </div>
  );
};

const mapsStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(BillingCycleList);
