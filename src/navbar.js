import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          React Page
        </Link>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/accordion">
                Accordion
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/showads">
                Ads Box
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/incredecre">
                Incre/Decrement
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/timer">
                Timer
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/todo">
                Todo List
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/keepnote">
                Keep Note
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
