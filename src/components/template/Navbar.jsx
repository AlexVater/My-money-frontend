import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(true);
  }

  const { name, email } = props.user;

  return (
    <div className="p-3">
      <ul className="w-full  bg-gray-600">
        <li
          onMouseLeave={() => changeOpen()}
          className={`dropdown user user-menu ${open ? "open" : ""}`}
        >
          <a
            href="#"
            onClick={() => changeOpen()}
            aria-expanded={open ? "true" : "false"}
            className="dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              src="http://lorempixel.com/160/160/abstract"
              className="user-image"
              alt="User Image"
            />
            <span className="hidden-xs">{name}</span>
          </a>
          <ul className="dropdown-menu">
            <li className="user-header">
              <img
                src="http://lorempixel.com/160/160/abstract"
                className="img-circle"
                alt="User Image"
              />
              <p>
                {name}
                <small>{email}</small>
              </p>
            </li>
            <li className="user-footer">
              <div className="pull-right">
                <a
                  href="#"
                  onClick={props.logout}
                  className="btn btn-default btn-flat"
                >
                  Sair
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
