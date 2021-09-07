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
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios[method](`${BASEURL}billingCycles/${id}`, values).then((resp) => {
      dispatch(init());
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

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
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
