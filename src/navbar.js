import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Home
          </Link>
        </li>
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
    </>
  );
};

export default Navbar;
