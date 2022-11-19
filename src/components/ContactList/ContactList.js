// import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Item } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <Item key={contact.id}>
            <Contact contact={contact} />
          </Item>
        ))
      ) : (
        <div>No contacts </div>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
