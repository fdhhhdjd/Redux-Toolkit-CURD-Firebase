import React, { useContext, useState } from "react";
import Toast from "../Component/Toast";
import "../Styles/Toasts.css";

import { ToastContext } from "../../Context/ToastContext";
const Toasts = () => {
  const { list, setList, showToast } = useContext(ToastContext);
  return (
    <>
    <div>
        </div>
        <Toast list={list} setList={setList} />
      </div>
    </>
  );
};

export default Toasts;
