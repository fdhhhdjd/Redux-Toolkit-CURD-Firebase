import React, { useEffect, useState } from "react";
import {
  addContact,
  getContact,
  GetTodo,
  updateContact,
} from "../Redux/ContactSlice";
import "../Styles/AddEdit.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
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
  const { id } = useParams();
  const { name, email, phone, status } = state;
  const { contact } = useSelector(GetTodo);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "all",
  });
  const handleSubmit1 = (e, data) => {
    if (!id) {
      dispatch(addContact(state), toast.success("Add user Success 😊"));
    } else {
      dispatch(updateContact(state), toast.success("Edit user Success 👌 "));
    }
    setTimeout(() => {
      history.push("/");
    }, 500);
    // }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    dispatch(getContact(id));
    setState({ ...contact });
  }, [id, contact]);
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
          onSubmit={handleSubmit(handleSubmit1)}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            value={name || ""}
            {...register("name", { required: true, maxLength: 20 })}
            name="name"
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>
            {errors.name?.type === "required" && "Please Enter Name ?"}
            {errors?.name?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email || ""}
            placeholder="Your Email ..."
            {...register("email", {
              required: true,
              // pattern: /^\S+@\S+$/i,
            })}
            name="email"
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>
            {errors.email?.type === "required" && "Please Enter Email "}
            {/* {errors?.email?.type === "pattern" && "Email Invalid"} */}
          </p>

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
          {id ? (
            <input type="submit" value="Edit User" />
          ) : (
            <input type="submit" value="Add User" />
          )}
          <Link to="/">
            <input type="button" value="Go Back 🤏" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
