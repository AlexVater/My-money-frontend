import React from "react";
import { Field } from "redux-form";

import Grid from "../components/layout/Grid";
import LabelAndInput from "../components/form/LabelAndInput";

const CredList = (props) => {
  function renderRows() {
    return (
      <tr>
        <td>
          <Field name="credits[0].name" component={LabelAndInput} />
        </td>
        <td>
          <Field name="credits[0].value" component={LabelAndInput} />
        </td>
        <td></td>
      </tr>
    );
  }

  return (
    <Grid col={props.col}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </Grid>
  );
};

export default CredList;
