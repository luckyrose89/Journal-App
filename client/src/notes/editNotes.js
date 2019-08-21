import React from "react";
import { withAppContext } from "../AppContext";

class EditNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.props
      .getNote(this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.title,
          body: response.body
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .editNote(this.props.match.params.id, this.state)
      .then(response => {
        this.clearInputs();
        this.props.history.push("/notes");
      })
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
          <h4>Edit Note</h4>
          <label>Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            placeholder="title"
          />
          <label>Body</label>
          <input
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter text"
          />
          <button>Submit</button>
        </form>
        {<p>{this.state.errorMessage}</p>}
      </div>
    );
  }
}

export default withAppContext(EditNote);
