import { React, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "../store/actions/dashboardAction";

import Grid from "../components/layout/Grid";
import SectionContent from "../components/template/SectionContent";
import SectionHeader from "../components/template/SectionHeader";
import ValueBox from "../widget/ValueBox";

const Dashboard = (props) => {
  useEffect(() => {
    props.getSummary();
  }, [props]);

  const { credit, debt } = props.summary;

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
