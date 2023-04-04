import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <h2 className="normal-case text-xl">
          <i className="fa-brands fa-github fa-xl p-3"></i>Github Finder
        </h2>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-xl">
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
    </nav>
  );
};
export default Navbar;
