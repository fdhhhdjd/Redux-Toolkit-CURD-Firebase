import React, { useState } from "react";
import { useParams } from "react-router";
import "../Styles/View.css";
import { Link } from "react-router-dom";
import { getContact } from "../Redux/ContactSlice";
import { useDispatch } from "react-redux";

const View = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact(id));
  }, [id]);
  const { id } = useParams();
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{user.email}</span>
            <br />
            <br />
            <strong>Status: </strong>
            <span>{user.status}</span>
            <br />
            <br />
            <strong>Phone: </strong>
            <span>{user.phone}</span>
            <br />
            <br />
            <Link to="/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
