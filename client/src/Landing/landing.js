import React from "react";
import { Link } from "react-router-dom";
import { withAppContext } from "../AppContext";

function Landing(props) {
  if (!props.token) {
    return (
      <div>
        Capture your thoughts & more...
        <button>
          <Link to="/signup">Signup</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    );
  } else {
    return <div />;
  }
}

export default withAppContext(Landing);
