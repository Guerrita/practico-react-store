import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import { NavLink } from "react-router-dom";
import Menu from "@components/Menu";

import AppContext from "../context/AppContext";
import menu from "@logos/Logo-nobg.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="navbar-left">
      <img src={menu} alt="menu" className="menu" />
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/patients">Pacientes</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">Médicos</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            medico@example.com
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
