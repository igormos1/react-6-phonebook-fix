import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './contacts-action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload)
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter
})