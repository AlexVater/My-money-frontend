import axios from "axios";
const baseURL = "http://localhost:8080/api";

export function getSummary() {
  const request = axios.get(`${baseURL}/billingCycles/summary`);
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request,
  };
}
