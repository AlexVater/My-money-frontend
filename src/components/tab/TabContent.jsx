import React from "react";
import { connect } from "react-redux";

const TabContent = (props) => {
  const selected = props.tab.selected === props.id;
  return <div id={props.id}>{selected ? props.children : ""}</div>;
};

const mapStateToProps = (state) => ({ tab: state.tab });

export default connect(mapStateToProps)(TabContent);
