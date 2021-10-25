import React, { useContext, useState } from "react";
import Toast from "../Component/Toast";
import "../Styles/Toasts.css";

import { ToastContext } from "../ToastContext/ToastContext";
const Toasts = () => {
  const { list, setList, showToast } = useContext(ToastContext);
  return (
    <>
      <Toast list={list} setList={setList} />
    </>
  );
};

export default Toasts;
