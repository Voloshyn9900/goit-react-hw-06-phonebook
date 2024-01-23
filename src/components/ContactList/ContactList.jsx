import React from 'react';
import { ButtonDel, List, ListItem } from './ContactList.styled';

export const ContactList = ({ sortContacts, onDelete }) => {
  return (
    <>
      <List>
        {sortContacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonDel onClick={() => onDelete(contact.id)}>Delete</ButtonDel>
          </ListItem>
        ))}
      </List>
    </>
  );
};
