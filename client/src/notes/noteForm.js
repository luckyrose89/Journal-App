import React from "react";

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
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
      title: "",
      body: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>New Journal Entry</h4>
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
            value="this.state.body"
            onChange={this.handleChange}
            type="text"
            placeHolder="Enter text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
