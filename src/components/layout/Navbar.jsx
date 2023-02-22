import React from "react";

export const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon} />
          {props.title}
        </h1>
      </nav>
    </div>
  );
};
