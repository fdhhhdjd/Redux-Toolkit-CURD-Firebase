import React, { useState } from "react";
import { addContact, GetTodo } from "../Redux/ContactSlice";
import "../Styles/AddEdit.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  phone: "",
  status: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, email, phone, status } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !status) {
      toast.error("Please Enter Input !!!");
    } else {
      dispatch(addContact(state), toast.success("Add user Success 😊"));
      setTimeout(() => {
        history.push("/");
      }, 500);
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name ..."
            value={name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ..."
            value={email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="status">Status</label>
          <select
            className="dropdown"
            name="status"
            onChange={handleDropdownChange}
          >
            <option>Please Select Status</option>
            <option value="Active" selected={status === "Active" ? status : ""}>
              Active
            </option>
            <option
              value="Inactive"
              selected={status === "Inactive" ? status : ""}
            >
              Inactive
            </option>
          </select>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Contact No ..."
            value={phone || ""}
            onChange={handleInputChange}
          />
          <input type="submit" value="Save" />
          <Link to="/">
            <input type="button" value="Go Back" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
