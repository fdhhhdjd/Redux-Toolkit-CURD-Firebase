import React, { useState, createContext, useEffect, useRef } from "react";
export const ToastContext = createContext();
export const ToastContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  let toastProperties = null;
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          json: "fas fa-check-circle",
          description: "Add user Success 😊",
          backgroundColor: "toast--success",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Thất bại",
          backgroundColor: "toast--error",
          button: "btn btn--danger",
          json: "fas fa-exclamation-triangle",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "Khá thành công",
          backgroundColor: "toast--info",
          json: "fas fa-info",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Gần thất bại",
          backgroundColor: "toast--warning",
          json: "fas fa-radiation-alt",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };
  const data = { list, setList, showToast };

  return <ToastContext.Provider value={data}>{children}</ToastContext.Provider>;
};
