import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar bg-neutral text-neutral-content">
        <Link href="/" className="flex-1">
          <h2 className="normal-case text-xl">
            <i className="fa-brands fa-github fa-xl p-3"></i>Github Finder
          </h2>
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className={"text-xl"}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-xl">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
