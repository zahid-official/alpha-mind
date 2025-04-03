import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link className="lg:btn lg:text-base lg:rounded-full lg:px-5" href={"/login"}>Login</Link>
      </li>
      <li>
        <Link className="lg:btn lg:text-base lg:rounded-full lg:px-5" href={"/register"}>Register</Link>
      </li>
    </>
  );
  return (
    <div className="shadow-sm py-5 px-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-4xl font-bold">Alpha Mind</a>
        </div>

        <div className="navbar-end ">
          <ul className="hidden lg:flex menu menu-horizontal px-1 text-lg space-x-4">{links}</ul>

          {/* dropdown */}
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-base text-black menu-md dropdown-content bg-base-100 rounded-box z-10 right-0 mt-3 w-52 p-2 shadow"
            > 
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
