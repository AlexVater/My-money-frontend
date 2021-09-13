import { React, useEffect, useState } from "react";

import Grid from "../components/layout/Grid";
import Navbar from "../components/template/Navbar";
import SectionContent from "../components/template/SectionContent";
import SectionHeader from "../components/template/SectionHeader";
import ValueBox from "../widget/ValueBox";

import axios from "axios";
const baseURL = "http://localhost:8080/api/";

const Dashboard = () => {
  const [values, setValues] = useState({ credit: 0, debt: 0 });

  useEffect(() => {
    axios
      .get(`${baseURL}billingCycles/summary`)
      .then((resp) => setValues(resp.data));
  }, []);

  const { credit, debt } = values;

  return (
    <>
      <SectionHeader title="Dashtitle" small="v.1.0.1" />
      <Navbar />
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
            title={credit - debt}
            sub="Valor Consolidado"
            icon="GiBanknote"
          />
        </Grid>
      </SectionContent>
    </>
  );
};

export default Dashboard;
