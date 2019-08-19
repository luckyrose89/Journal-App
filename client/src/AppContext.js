import React from "react";
import axios from "axios";

// Create an instance of Context
const AppContext = React.createContext();

// Create Provider with  all the API calls
export class AppContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      user: {},
      token: ""
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    return axios.get("/api/note").then(response => {
      this.setState({ notes: response.notes });
      return response;
    });
  };

  addNote = newNote => {
    return axios.post("/api/note", newNote).then(response => {
      this.setState(prevState => {
        return { notes: [...prevState.notes, response.data] };
      });
      return response;
    });
  };

  getNote = noteId => {
    return axios.get(`/api/note/${noteId}`).then(response => {
      return response.data;
    });
  };

  editNote = (noteId, note) => {
    return axios.put(`/api/note/${noteId}`, note).then(response => {
      this.setState(prevState => {
        const updatedNotes = prevState.notes.map(note => {
          return note._id === response.data._id ? response.data : note;
        });
        return { notes: updatedNotes };
      });
      return response;
    });
  };

  deleteNote = noteId => {
    return axios.delete(`/api/note/${noteId}`).then(response => {
      this.setState(prevState => {
        const updatedNotes = prevState.notes.filter(note => {
          return note._Id !== noteId;
        });
        return { notes: updatedNotes };
      });
      return response;
    });
  };

  signup = () => {};

  login = () => {};

  render() {
    return (
      <AppContext.Provider
        value={{
          getNotes: this.getNotes,
          getNote: this.getNote,
          editNote: this.editNote,
          deleteNote: this.deleteNote,
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

// Create a Higher Order Component that
// returns the App Context consumer
// Code attributed to V School Context API tutorial
// Link: https://coursework.vschool.io/token-auth-with-jwts-part-2-react-context/

export function withAppContext(Component) {
  return function wrapperFunction(props) {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
}
