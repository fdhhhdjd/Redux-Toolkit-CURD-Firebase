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
    {
      id: 3,
      name: "Nguyễn Bảo Khang",
      email: "jbaokhangdesigner@gmail.com",
      phone: "0353263452",
      status: "Active",
    },
    {
      id: 4,
      name: "Bùi Huỳnh Quốc Trung	",
      email: "quoctrung@gmail.com",
      phone: "0348561815",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Trần Phi Hoàng",
      email: "phihoang1@gmail.com",
      phone: "0936095986",
      status: "Active",
    },
  ],
  contact: {
    name: "",
    email: "",
    phone: "",
    status: "",
  },
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.contacts = [newData, ...state.contacts];
    },
  },
});
const ContactReducer = TodoSlice.reducer;
export const { addContact } = TodoSlice.actions;
export const GetTodo = (state) => state.todos;
export default ContactReducer;
