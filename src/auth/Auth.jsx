import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signup } from "../store/actions/authAction";
import AuthInput from "./AuthInput";

let Auth = (props) => {
  const [loginMode, setLoginMode] = useState(true);
  const { handleSubmit } = props;

  function changeMode() {
    console.log("aqui");
    setLoginMode(!loginMode);
  }

  function onSubmit(values) {
    const { login, signup } = props;
    loginMode ? login(values) : signup(values);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600  to-green-500">
      <div className="bg-white flex-col p-10 rounded shadow-lg text-center">
        <h2 className="font-black text-3xl mb-4"> My Money </h2>
        <div className="text-left">
          <p>Bem vindo!</p>
        </div>
        <form className="" onSubmit={handleSubmit((v) => onSubmit(v))}>
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
          <button
            type="submit"
            className="p-2 my-3 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            {loginMode ? "Entrar" : "Registrar"}
          </button>
        </form>
        <a
          href="/#"
          className="underline text-gray-800 cursor-pointer"
          onClick={() => changeMode()}
        >
          {loginMode
            ? "Novo usuário? Registrar aqui!"
            : "Já é cadastrado? Entrar aqui!"}
        </a>
      </div>
    </div>
  );
};

Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
