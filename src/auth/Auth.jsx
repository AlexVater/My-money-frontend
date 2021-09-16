import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signup } from "../store/actions/authAction";
import Grid from "../components/layout/Grid";
import AuthInput from "./AuthInput";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }
  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }
  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="login-box">
        <div className="login-logo">
          <b> My</b> Money
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Bem vindo!</p>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <Field
              component={AuthInput}
              type="input"
              name="name"
              placeholder="Nome"
              icon="user"
              hide={loginMode}
            />
            <Field
              component={AuthInput}
              type="email"
              name="email"
              placeholder="E-mail"
              icon="envelope"
            />
            <Field
              component={AuthInput}
              type="password"
              name="password"
              placeholder="Senha"
              icon="lock"
            />
            <Field
              component={AuthInput}
              type="password"
              name="confirm_password"
              placeholder="Confirmar Senha"
              icon="lock"
              hide={loginMode}
            />
            <div>
              <Grid cols="4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  {loginMode ? "Entrar" : "Registrar"}
                </button>
              </Grid>
            </div>
          </form>
          <br />
          <a onClick={() => this.changeMode()}>
            {loginMode
              ? "Novo usuário? Registrar aqui!"
              : "Já é cadastrado? Entrar aqui!"}
          </a>
        </div>
      </div>
    );
  }
}
Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
