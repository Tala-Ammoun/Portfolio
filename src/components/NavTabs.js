import React from 'react';
import { NavLink } from 'react-router-dom';


const navStyle = {
  tabs: {
    fontFamily: "Times New Roman",
    margin: 5,
  },
}


function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" style={navStyle.tabs}>
        <NavLink
          to="/Portfolio"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item" style={navStyle.tabs}>
        <NavLink
          to="/Portfolio/Projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item" style={navStyle.tabs}>
        <NavLink
          to="/Portfolio/Contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
