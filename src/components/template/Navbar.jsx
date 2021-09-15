import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";

function Navbar(props) {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-1 py-2">
      <h1 className="text-xl text-white font-semibold tracking-wider">
        My Money
      </h1>
      <a
        href="#"
        className="text-sm text-white leading-none border rounded border-white px-4 py-2 hover:border-transparent hover:text-gray-800 hover:bg-white transition"
      >
        Sair
      </a>
    </nav>
  );
}

const mapStateToProps = (state) => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
