import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./App";
import Auth from "./auth/Auth";
import { validateToken } from "./store/actions/authAction";

const AuthOrApp = (props) => {
  useEffect(() => {
    if (props.auth.user) {
      props.validateToken(props.auth.user.token);
    }
  });

  const { user, validToken } = props.auth;

  function handleRender() {
    if (user && validToken) {
      axios.defaults.headers.common["authorization"] = user.token;
      return <App>{props.children}</App>;
    } else if (!user && !validToken) {
      return <Auth />;
    } else {
      return false;
    }
  }

  return handleRender();
};

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
