import React from 'react';
import { ButtonDel, List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactById } from '../../redux/contactSlice';


export const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.account.contacts);
  const filter = useSelector(state => state.account.filter);

  

  const filterContacts = contacts.filter(contact => contact.name.includes(filter));

  return (
    <>
      <List>
        {filterContacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonDel onClick={() => dispatch(deleteContactById(contact.id))}>
              Delete
            </ButtonDel>
          </ListItem>
        ))}
      </List>
    </>
  );
};
