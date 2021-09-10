import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showUpdate, showDelete } from "../store/actions/billingCycleAction";

import { RiPencilFill } from "react-icons/ri";
import { IoTrashBin } from "react-icons/io5";

const BillingCycleList = (props) => {
  function renderRows() {
    let list = props.list || [];
    return list.map((blc, key) => {
      return (
        <tr key={key}>
          <td>{blc.name}</td>
          <td>{blc.month}</td>
          <td>{blc.year}</td>
          <td className="flex gap-4">
            <button
              className="p-2 text-sm rounded bg-gray-700 text-white hover:text-yellow-400"
              onClick={() => props.showUpdate(blc)}
            >
              <RiPencilFill />
            </button>
            <button
              className="p-2 text-sm rounded bg-gray-700 text-white hover:text-red-400"
              onClick={() => props.showDelete(blc)}
            >
              <IoTrashBin />
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
            <th className="w-36 ">Ações</th>
          </tr>
        </thead>
        <tbody className="mt-3 text-gray-700">{renderRows()}</tbody>
      </table>
    </div>
  );
};

const mapsStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ showUpdate, showDelete }, dispatch);

export default connect(mapsStateToProps, mapDispatchToProps)(BillingCycleList);
