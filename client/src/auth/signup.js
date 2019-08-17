import React from "react";

class Signup extends React.Component {
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
        <form>
          <h4>Signup</h4>
          <label>Username:</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="text"
            placeholder="Username"
          />
          <label>Password:</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="password"
            type="text"
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
