import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Thoughts & More</h1>
      <ul>
        <li>About</li>
        <Link to="/signup">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
