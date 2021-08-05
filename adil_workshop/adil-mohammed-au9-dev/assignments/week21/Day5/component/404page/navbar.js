import "./navbar.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navi">
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
