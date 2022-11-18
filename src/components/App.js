import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading, getContacts } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Wrap } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const getContacts = () => {
  //   return parsedContacts ?? userContacts;
  // };

  // const [contacts, setContacts] = useState(getContacts);

  const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   contacts.find(contact => contact.name === name)
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(prevState => [contact, ...prevState]);
  // };

  // useEffect(() => {
  //   localStorage.setItem(KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Wrap>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        // onDeleteContact={deleteContact}
      />
    </Wrap>
  );
};

export default App;
