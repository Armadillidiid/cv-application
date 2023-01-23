import { FaRegSave, FaPencilAlt, FaGithub } from "react-icons/fa";
import useAutofill from "../hooks/useAutofill";
import saveCv from "../utils/saveCv";

const Navbar = (props) => {
  return (
    <div className="navbar bg-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <button
              className=""
              onClick={() => useAutofill(props.setUserData)}
            >
              <FaPencilAlt />
              Autofill
            </button>
          </li>
          <li>
            <button className="" onClick={saveCv}>
              <FaRegSave />
              Save
            </button>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost no-animation hover:bg-transparent cursor-default normal-case text-xl">CV Maker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            {/* <a>Autofill</a> */}
            <button
              className="btn btn-ghost"
              onClick={() => useAutofill(props.setUserData)}
            >
              <FaPencilAlt />
              Autofill
            </button>
          </li>
          <li>
            {/* <a><FaRegSave /><span>Save</span></a> */}
            <button className="btn btn-ghost" onClick={saveCv}>
              <FaRegSave />
              Save
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn capitalize"
          href="https://github.com/Armadillidiid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white mr-2" />
          armadillidiid
        </a>
      </div>
    </div>
  );
};

export default Navbar;
