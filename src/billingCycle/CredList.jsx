import React from "react";
import { Field, arrayInsert } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LabelAndInput from "../components/form/LabelAndInput";

import { BiPlusMedical } from "react-icons/bi";
import { IoIosCopy } from "react-icons/io";

const CredList = (props) => {
  function add(key, item = {}) {
    if (!props.readOnly) {
      props.arrayInsert("billingCycleForm", "credits", key, item);
    }
  }

  function renderRows() {
    let list = props.list || [];
    return list.map((item, key) => {
      return (
        <tr className="flex justify-between" key={key}>
          {console.log(item)}
          <td>
            <Field
              name={item.name}
              component={LabelAndInput}
              placeholder="Informe o nome"
              readOnly={props.readOnly}
            />
          </td>
          <td>
            <Field
              name={item.value}
              component={LabelAndInput}
              placeholder="Informe o valor"
              readOnly={props.readOnly}
            />
          </td>
          <td className="flex self-end gap-1">
            <button
              className="p-2 text-sm rounded bg-gray-700 text-white hover:text-green-400"
              type="button"
              onClick={() => add(key + 1)}
            >
              <BiPlusMedical />
            </button>
            <button
              className="p-2 text-sm rounded bg-gray-700 text-white hover:text-yellow-400"
              type="button"
              onClick={() => add(key + 1, item)}
            >
              <IoIosCopy />
            </button>
            <button className="p-2 text-sm rounded bg-gray-700 text-white hover:text-red-400">
              <IoIosCopy />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="mt-4 p-4">
      <thead className="text-left text-sm text-gray-700 font-bold">
        <tr className="flex justify-between">
          <th>Nome</th>
          <th>Valor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert }, dispatch);

export default connect(null, mapDispatchToProps)(CredList);
