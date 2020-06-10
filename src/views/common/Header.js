import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-dark ">
      <div
        className="container "
        // style={{ border: "1px solid green" }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand font-weight-bold" href="/">
            Quiz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto font-weight-bold">
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  activeClassName="active"
                  className="nav-link">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
