const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>হোম</a>
            </li>
            <li>
              <a href="application">জন্ম নিবন্ধন</a>
              <ul className="p-2">
                <li>
                  <a href="correction">জন্ম নিবন্ধন সংশোধন</a>
                </li>
                <li>
                  <a href="birthfind">জন্ম নিবন্ধন তথ্য অনুসন্ধান</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">মৃত্যু নিবন্ধন</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">হোম</a>
          </li>
          <li>
            <a href="application">জন্ম নিবন্ধন</a>
            <ul className="p-2">
              <li>
                <a href="correction">জন্ম নিবন্ধন সংশোধন</a>
              </li>
              <li>
                <a href="birthfind">জন্ম নিবন্ধন তথ্য অনুসন্ধান</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">মৃত্যু নিবন্ধন</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;