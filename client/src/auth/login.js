import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }

  handleChange = e => {};
  clearInputs = () => {};
  handleSubmit = e => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Login</h4>
          <label>Username:</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            placeholder="username"
          />
          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="text"
            placeholder="password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
