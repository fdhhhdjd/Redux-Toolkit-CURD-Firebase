import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, GetTodo, setFilter } from "../Redux/ContactSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/Home.css";
import Moments from "./Moments";
const Home = () => {
  const { contacts, filter } = useSelector(GetTodo);
  const dispatch = useDispatch();
  const deleteFilterContact = (id) => {
    if (window.confirm("Are you sure you want to delete  ?")) {
      dispatch(deleteContact(id), toast.success("Delete user Success 😉"));
    }
  };

  const handleReloading = () => {
    window.location.reload();
  };

  return (
    <>
      <Moments />
      <div style={{ marginTop: "100px" }}>
        <Link to="/add">
          <button className="btn btn-contact">Add Contact 🤏</button>
        </Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter((item) => {
                if (filter === "All") {
                  return item;
                } else {
                  return item.status === filter;
                }
              })
              .map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={`/update/${item.id}`}>
                        <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button
                        className="btn btn-delete"
                        onClick={() => deleteFilterContact(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/view/${item.id}`}>
                        <button className="btn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <label htmlFor="">Status:</label>
        <button
          className="btn btn-active"
          onClick={() => dispatch(setFilter("Active"))}
        >
          Active
        </button>
        <button
          className="btn btn-inactive"
          onClick={() => dispatch(setFilter("Inactive"))}
        >
          Inactive
        </button>
        <button
          className="btn btn-reset"
          onClick={() => dispatch(setFilter("All"))}
        >
          Reset
        </button>
        <button className="btn btn-reload" onClick={handleReloading}>
          ReLoad
        </button>
      </div>
    </>
  );
};

export default Home;
