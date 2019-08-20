import React from "react";
import { withAppContext } from "../AppContext";

class Signup extends React.Component {
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
      .signup(this.state)
      .then(() => this.props.history.push("/notes"))
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            value={this.state.password}
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

export default withAppContext(Signup);
