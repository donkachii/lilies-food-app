import React from "react";
import liliesIcon from "../images/liliesIcon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="px-2 sm:px-4 py-5 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <section className="flex items-center">
          <img className="mr-3 h-6 sm:h-14" src={liliesIcon} alt="liles" />
          <span className="lilies-icon-text self-center text-white whitespace-nowrap">
            Lilies
          </span>
        </section>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <section className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="navbar-links flex flex-col items-center p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white md:border-0 md:p-0"
              >
                Home
              </a>
            </li>
            {user ? (
              <li role="button" onClick={handleLogout}>
                Logout
              </li>
            ) : (
              <>
                <li>
                  <a
                    href="/login"
                    className="block py-2 pr-4 pl-3 text-white md:border-0 md:p-0"
                  >
                    Login
                  </a>
                </li>
                <li className="block py-2 pr-4 pl-3 text-white md:border-0 md:p-0">
                  <button
                    className="sign-up focus:ring-4 focus:outline-none"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
