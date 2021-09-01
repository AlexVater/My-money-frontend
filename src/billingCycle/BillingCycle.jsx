import React from "react";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTab, showTabs } from "../store/actions/tabsAction";

import SectionContent from "../components/template/SectionContent";
import SectionHeader from "../components/template/SectionHeader";

import Tabs from "../components/tab/Tabs";
import TabsContent from "../components/tab/TabsContent";
import TabsHeader from "../components/tab/TabsHeader";
import TabHeader from "../components/tab/TabHeader";
import TabContent from "../components/tab/TabContent";

import BillingCycleList from "./BillingCycleList";
import BillingCycleForm from "./BillingCycleForm";

import { create } from "../store/actions/billingCycleAction";

const BillingCycle = (props) => {
  useEffect(() => {
    props.selectTab("tabList");
  }, [props]);

  useEffect(() => {
    props.showTabs("tabList", "tabCreate");
  }, [props]);

  return (
    <>
      <SectionHeader title="Ciclos de Pagamento" small="Cadastro" />
      <SectionContent>
        <Tabs>
          <TabsHeader>
            <TabHeader label="Listar" target="tabList" icon="RiBankFill" />
            <TabHeader
              label="Incluir"
              target="tabCreate"
              icon="RiBankCardLine"
            />
            <TabHeader label="Alterar" target="tabUpdate" icon="GiBanknote" />
            <TabHeader label="Excluir" target="tabDelete" icon="BsTrashFill" />
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList">
              <BillingCycleList />
            </TabContent>
            <TabContent id="tabCreate">
              <BillingCycleForm onSubmit={props.create} />
            </TabContent>
            <TabContent id="tabUpdate">
              <h1>Alterar</h1>
            </TabContent>
            <TabContent id="tabDelete">
              <h1>Excluir</h1>
            </TabContent>
          </TabsContent>
        </Tabs>
      </SectionContent>
    </>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
