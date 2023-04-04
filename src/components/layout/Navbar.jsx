import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon} />
          {props.title}
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
