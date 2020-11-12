import React from "react";
import nav_data from "../router/nav";
import { Link, NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav">
      {nav_data.map((item, index) => {
        return (
          <NavLink
            to={item.url}
            exact={item.exact}
            key={index}
            activeclass={"active"}
          >
            {item.txt}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Nav;
