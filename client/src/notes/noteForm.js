import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
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
      title: "",
      body: "",
      errorMessage: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .addNote(this.state)
      .then(response => {
        this.clearInputs();
      })
      .catch(err =>
        this.setState({
          errorMessage: err.response.data.message
        })
      );
  };

  render() {
    return (
      <Container maxWidth="lg">
        <Typography
          className="titlePadding"
          align="left"
          style={{ marginBottom: 15 }}
          variant="h6"
        >
          New Entry | Create a Note
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-full-width"
            label="Title"
            style={{ margin: 8, marginBottom: 15 }}
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            placeholder="title"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Entry"
            style={{ margin: 8, marginBottom: 15 }}
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Enter text"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: 8 }}
          >
            Submit
          </Button>
        </form>
        <Typography color="error" variant="body1">
          {this.state.errorMessage}
        </Typography>
      </Container>
    );
  }
}

export default NoteForm;
