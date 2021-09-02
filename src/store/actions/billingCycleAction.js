import axios from "axios";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "./tabsAction";

const BASEURL = "http://localhost:8080/api/";
const INITIAL_VALUES = {};

export function getList() {
  const res = axios.get(`${BASEURL}billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: res,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASEURL}billingCycles`, values)
      .then((resp) => {
        dispatch(init());
      })
      .catch((e) => {
        console.log(e.response.data.erros);
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList("billingCycleForm", INITIAL_VALUES),
  ];
}
