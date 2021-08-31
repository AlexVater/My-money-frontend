import axios from "axios";
const baseURL = "http://localhost:8080/api/";

export function getList() {
  const res = axios.get(`${baseURL}billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: res,
  };
}
