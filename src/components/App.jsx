import { useEffect, useState } from 'react';
import { Section, Container, PhoneBook, Title } from './App.styled';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const localstorageKey = 'local-contacts';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getLocalstorage = () => {
  const savedContacts = localStorage.getItem(localstorageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(getLocalstorage());

  useEffect(() => {
    localStorage.setItem(localstorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = data => {
    setContacts(prevContacts => [...prevContacts, data]);
  };

  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
      const hasNumber = contact.number
        .toLowerCase()
        .includes(filter.toLowerCase());

      return hasName || hasNumber;
    });
  };

  const updateTopicFilter = newTopic => {
    setFilter(newTopic);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <Section>
      <Container>
        <PhoneBook>
          <Title>PhoneBook</Title>
          <Form onSubmitData={handleFormSubmit} contacts={contacts} />
          <Title>Contacts</Title>
          <Filter onChangeFilter={updateTopicFilter} />
          <ContactList
            sortContacts={filterContacts(contacts, filter)}
            onDelete={deleteContact}
          />
        </PhoneBook>
      </Container>
    </Section>
  );
};
