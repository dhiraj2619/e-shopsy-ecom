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
  const { isAuthenticated, user } = useSelector((state) => state.user);

  console.log(isAuthenticated);

  return (
    <header className="bg-purple-900 sticky top-0 py-2.5 z-10 w-full px-4">
      <div className="container w-full sm:w-9/15 mx-auto flex items-center justify-between">
        {/* Logo Section */}
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

        {/* Spacer for center alignment */}
        <div className="flex-1"></div>

        {/* Right Section */}
        <div className="flex items-center justify-between gap-4 sm:gap-7">
          <Searchbar />

          {/* Links */}
          <div className="flex items-center justify-between relative">
            {isAuthenticated === false ? (
              <Link
                className="bg-white text-purple-800 font-medium px-6 py-2 rounded-sm"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <span
                className="userDropdown flex items-center text-white gap-1 cursor-pointer"
                onClick={() => setTogglePrimarydropdown(!togglePrimarydropdown)}
              >
                {user.name && user.name.split(" ", 1)}
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
