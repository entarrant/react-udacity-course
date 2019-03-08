import React, { Component } from "react";

class ContactList extends React.Component {
  render() {
    const people = this.props.people;

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ContactList
          people={[{ name: "Ben" }, { name: "Stevie " }, { name: "Shaun" }]}
        />
        <ContactList
          people={[{ name: "Emily" }, { name: "Kevin" }, { name: "Aaron" }]}
        />
        <ContactList people={[{ name: "Andrew" }]} />
      </div>
    );
  }
}

export default App;
