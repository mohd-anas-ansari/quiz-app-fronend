import React from "react";
import { NavLink, Link } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

function Header() {
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <h1 className="title is-2 has-text-primary">Quiz</h1>
        </NavLink>

        <Link
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                activeClassName="is-primary"
                to="/signup"
                className="button"
              >
                Sign up
              </NavLink>
              <NavLink
                activeClassName="is-primary"
                to="/login"
                className="button"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
