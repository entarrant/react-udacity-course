import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts: contacts });
    });
  }

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id;
      })
    }));

    ContactsAPI.remove(contact);
  };

  onCreateContact = contact => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(previousState => ({
        contacts: previousState.contacts.concat(contact)
      }));
    });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              removeContact={this.removeContact}
            />
          )}
        />
        <Route
          exact
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.onCreateContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
