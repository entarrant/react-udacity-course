import React from "react";
import PropTypes from "prop-types";

function ListContacts(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
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
            onClick={() => props.removeContact(contact)}
          >
            Remove
          </div>
        </li>
      ))}
    </ol>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default ListContacts;
