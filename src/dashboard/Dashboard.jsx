import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "../store/actions/dashboardAction";

import Grid from "../components/layout/Grid";
import SectionContent from "../components/template/SectionContent";
import SectionHeader from "../components/template/SectionHeader";
import ValueBox from "../widget/ValueBox";
import axios from "axios";

const Dashboard = (props) => {
  const { credit, debt } = props.summary;

  function teste() {
    const request = axios.get(
      `http://localhost:8080/api/billingCycles/summary`
    );
    return {
      type: "BILLING_SUMMARY_FETCHED",
      payload: request,
    };
  }

  console.log(teste());

  return (
    <>
      <SectionHeader title="Dashtitle" small="v.1.0.1" />
      <SectionContent>
        <Grid col="3" gap="8">
          <ValueBox
            color="blue"
            title={credit}
            sub="Total de Créditos"
            icon="RiBankFill"
          />
          <ValueBox
            color="red"
            title={debt}
            sub="Total de Débitos"
            icon="RiBankCardLine"
          />
          <ValueBox
            color="green"
            title="122,50"
            sub="Valor Consolidado"
            icon="GiBanknote"
          />
        </Grid>
      </SectionContent>
    </>
  );
};

const mapStateToProps = (state) => ({ summary: state.dashboard.summary });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
