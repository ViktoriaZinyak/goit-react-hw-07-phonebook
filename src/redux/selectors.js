import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );

    return filteredContacts;
  }
);
