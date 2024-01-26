import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shortid from 'shortid';


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: {
      prepare({ name, number }) {
        return {
          payload: {
            name: name,
            number: number,
            id: shortid.generate(),
          },
        };
      },
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContactById(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContacts, changeFilter, deleteContactById } = contactSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  // можно добавить name: 'contacts' Slice,
  // blacklist: [''],
};

export const persistedReducer = persistReducer(persistConfig, contactReducer);


