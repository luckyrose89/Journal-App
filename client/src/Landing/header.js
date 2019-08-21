import React from "react";
import { withAppContext } from "../AppContext";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <h1>Thoughts & More</h1>
      {!props.token ? (
        <React.Fragment>
          <div>
            <ul>
              <Link to="/signup">
                <li>Register</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
            <ul>
              <li>Hi {props.user.username}!</li>
              <li onClick={() => props.logout()}>Logout</li>
            </ul>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
}

export default withAppContext(Header);
