import { Section, Container, PhoneBook, Title } from './App.styled';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

  return (
    <Section>
      <Container>
        <PhoneBook>
          <Title>PhoneBook</Title>
          <Form />
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </PhoneBook>
      </Container>
    </Section>
  );
};
