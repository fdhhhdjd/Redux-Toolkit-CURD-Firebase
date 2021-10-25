import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
const initialState = {
  contacts: [
    {
      id: 1,
      name: "Nguyễn Tiến Tài",
      email: "nguyentientai10@gmai.com",
      phone: "0798805741",
      status: "Active",
    },
    {
      id: 2,
      name: "Nguyễn Hữu Quyền",
      email: "huuquyen2000@gmail.com",
      phone: "09658235656",
      status: "Inactive",
    },
  ],
  contact: {
    name: "",
    email: "",
    phone: "",
    status: "",
  },
  filter: "All",
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getContact: (state, action) => {
      state.contact = state.contacts.find((item) => item.id == action.payload);
    },
    addContact: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.contacts = [...state.contacts, newData];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      state.contacts = state.contacts.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const ContactReducer = TodoSlice.reducer;
export const {
  addContact,
  deleteContact,
  getContact,
  updateContact,
  setFilter,
} = TodoSlice.actions;
export const GetTodo = (state) => state.todos;
export default ContactReducer;
