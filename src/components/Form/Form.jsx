import { useState } from 'react';
import { FormContainer, Label, SubmitButton } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactSlice';

export const Form = ({}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.account.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handlSubmit(event) {
    event.preventDefault();

    const contactExists = contacts.some(
      contact => contact.name === name || contact.number === number
    );
  
    if (contactExists) {
      alert('This contact already exists');
      return;
    }

    
    dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  }

  return (
    <FormContainer onSubmit={handlSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={e => setName(e.target.value)}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          onChange={e => setNumber(e.target.value)}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};
