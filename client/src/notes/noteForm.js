import React from "react";

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = e => {};

  clearInputs = () => {};

  handleSubmit = e => {};

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
