import React from "react";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate } from "../store/actions/billingCycleAction";

import { RiPencilFill } from "react-icons/ri";

const BillingCycleList = (props) => {
  useEffect(() => {
    props.getList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function renderRows() {
    let list = props.list || [];
    return list.map((blc, key) => {
      return (
        <tr key={key}>
          <td>{blc.name}</td>
          <td>{blc.month}</td>
          <td>{blc.year}</td>
          <td>
            <button
              className="p-2 text-sm rounded bg-gray-700 text-white hover:text-yellow-400"
              onClick={() => props.showUpdate(blc)}
            >
              <RiPencilFill />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="min-w-full">
        <thead className="text-left text-gray-700 font-bold border-b-2 border-gray-800">
          <tr>
            <th>Nome</th>
            <th>Mes</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="mt-3 text-gray-700">{renderRows()}</tbody>
      </table>
    </div>
  );
};

const mapsStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(BillingCycleList);
