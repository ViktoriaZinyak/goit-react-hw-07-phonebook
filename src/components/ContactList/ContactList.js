// import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Item } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const visiableContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );
  console.log(filterValue);

  return (
    <ul>
      {visiableContacts.length > 0 ? (
        visiableContacts.map(contact => (
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
