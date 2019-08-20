import React from "react";
import { withAppContext } from "../AppContext";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      errorMessage: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state)
      .then(() => this.props.history.push("/notes"))
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.message
        });
      });
  };

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

export default withAppContext(Login);
