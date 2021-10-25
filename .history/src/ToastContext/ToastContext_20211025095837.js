import React, { useState, createContext, useEffect } from "react";
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
          description: "Add user Success 😊",
          backgroundColor: "toast--success",
          json: success,
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Thất bại",
          backgroundColor: "toast--error",
          button: "btn btn--danger",
          json: danger,
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "Khá thành công",
          backgroundColor: "toast--info",
          json: info,
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Gần thất bại",
          backgroundColor: "toast--warning",
          json: warning,
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
