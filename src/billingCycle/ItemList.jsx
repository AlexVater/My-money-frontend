import React from "react";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LabelAndInput from "../components/form/LabelAndInput";
import If from "../components/operator/If";

import { BiPlusMedical } from "react-icons/bi";
import { IoIosCopy } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";

const ItemList = (props) => {
  function renderRows() {
    const list = props.list || [];
    return list.map((item, index) => (
      <tr className="flex justify-between" key={index}>
        <td>
          <Field
            name={`${props.field}[${index}].name`}
            component={LabelAndInput}
            placeholder="Informe o nome"
            readOnly={props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${props.field}[${index}].value`}
            component={LabelAndInput}
            placeholder="Informe o valor"
            readOnly={props.readOnly}
          />
        </td>
        <If test={props.showStatus}>
          <td>
            <Field
              name={`${props.field}[${index}].status`}
              component={LabelAndInput}
              placeholder="Informe o status"
              readOnly={props.readOnly}
            />
          </td>
        </If>
        <td className="flex self-end gap-1">
          <button
            className="p-2 text-sm rounded bg-gray-700 text-white hover:text-green-400"
            type="button"
            onClick={() => add(index + 1)}
          >
            <BiPlusMedical />
          </button>
          <button
            className="p-2 text-sm rounded bg-gray-700 text-white hover:text-yellow-400"
            type="button"
            onClick={() => add(index + 1, item)}
          >
            <IoIosCopy />
          </button>
          <button
            className="p-2 text-sm rounded bg-gray-700 text-white hover:text-red-400"
            type="button"
            onClick={() => remove(index)}
          >
            <IoTrashBin />
          </button>
        </td>
      </tr>
    ));
  }

  function add(key, item = {}) {
    if (!props.readOnly) {
      props.arrayInsert("billingCycleForm", props.field, key, item);
    }
  }

  function remove(index) {
    if (!props.readOnly && props.list.length > 1) {
      props.arrayRemove("billingCycleForm", props.field, index);
    }
  }
  return (
    <div>
      <h2 className="font-bold text-xl text-gray-700">{props.title}</h2>
      <table className="mt-4 p-4">
        <thead className="text-left text-sm text-gray-700 font-bold">
          <tr className="flex justify-between">
            <th>Nome</th>
            <th>Valor</th>
            <If test={props.showStatus}>
              <th>Status</th>
            </If>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);
