import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    const { contacts } = this.props;

    const matchingContacts =
      query === ""
        ? contacts
        : contacts.filter(contact =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
          <a
            href="#create"
            onClick={() => this.props.onNavigate()}
            className="add-contact"
          >
            Add Contact
          </a>
        </div>

        {matchingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing results {matchingContacts.length} of {contacts.length}
            </span>
            <button onClick={() => this.clearQuery()}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
          {matchingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <div
                className="contact-remove"
                onClick={() => this.props.removeContact(contact)}
              >
                Remove
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
