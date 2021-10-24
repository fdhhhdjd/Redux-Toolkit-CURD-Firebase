import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styles/View.css";
import { Link } from "react-router-dom";
import { getContact, GetTodo } from "../Redux/ContactSlice";
import { useDispatch, useSelector } from "react-redux";

const View = () => {
  const [user, setUser] = useState({});
  const { contact } = useSelector(GetTodo);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact(id));
    setUser({ ...contact });
  }, [id, contact]);

  return (
    <>
      <h3> Using table properties</h3>
      <div class="col-wrap">
        <div class="col">
          <h2>Column 2</h2>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
        </div>
      </div>
    </>
  );
};

export default View;
