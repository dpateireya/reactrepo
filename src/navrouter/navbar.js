import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="accordion">
            Accordion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="showads">
            Ads Box
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="incredecre">
            Incre/Decrement
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="timer">
            Timer
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="todo">
            Todo List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="keepnote">
            Keep Note
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="covid19">
            Covid-19
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
