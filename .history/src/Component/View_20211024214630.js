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
      <div class="inline">
        <div class="wrap">
          <p>Example of single line.</p>
        </div>
      </div>

      <div class="inline">
        <div class="wrap">
          <p>To look best, text should really be centered inside.</p>
        </div>
      </div>
    </>
  );
};

export default View;
