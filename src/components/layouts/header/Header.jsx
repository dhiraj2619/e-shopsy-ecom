import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PrimaryDropdown from "./PrimaryDropdown";

const Header = () => {
  const [togglePrimarydropdown, setTogglePrimarydropdown] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user || {});

  console.log(isAuthenticated);

  return (
    <header className="bg-purple-900 fixed top-0 py-2.5 z-10 w-full px-4">
      <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="flex items-center flex-1">
          <Link to="/">
            <div className="navbar-logo flex-shrink-0">
              <img
                src={logo}
                draggable="false"
                className="object-contain h-8"
                alt="Logo"
              />
            </div>
          </Link>
          <Searchbar />
        </div>

        {/* Spacer for center alignment */}
        <div className="flex-1"></div>

        {/* Right Section */}
        <div className="flex items-center justify-between gap-4 sm:gap-7">
          {/* Links */}
          <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
            {isAuthenticated === false ? (
              <Link
                to="/login"
                className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer"
              >
                Login
              </Link>
            ) : (
              <span
                className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer"
                onClick={() => setTogglePrimarydropdown(!togglePrimarydropdown)}
              >
                {user?.name && user.name.split(" ", 1)}
                <span>
                  {togglePrimarydropdown ? (
                    <ExpandLessIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                  )}
                </span>
              </span>
            )}

            {togglePrimarydropdown && (
              <PrimaryDropdown
                setTogglePrimarydropdown={setTogglePrimarydropdown}
                user={user}
              />
            )}
          </div>

          <Link
            className="flex items-center text-white font-semibold gap-2"
            to="/cart"
          >
            <ShoppingCartIcon />
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
