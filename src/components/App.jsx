import { useState, useEffect } from 'react';
import ContactForm from './Form/Form';
import ContactList from './ContactList/Contactlist';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleForm = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const delContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleForm} />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>

      <ContactList contacts={visibleContacts} delContact={delContact} />
    </section>
  );
}

export default App;
