import React, { useCallback, useContext, useEffect } from "react";
import "../Styles/toast.css";
import { ToastContext } from "../ToastContext/ToastContext";
import Icons from "./Icons";
const Toast = () => {
  const { list, setList } = useContext(ToastContext);
  const deleteToast = useCallback(
    (id) => {
      const listItem = list.filter((e) => e.id !== id);
      setList(listItem);
    },
    [list, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id);
      }
    }, 150000);

    return () => {
      clearInterval(interval);
    };
  }, [list, deleteToast]);

  return (
    <>
      <div id="toast">
        {list.map((toast, i) => (
          <div key={i}>
            <div className={`toast ${toast.backgroundColor}`}>
              <div className="toast__icon">
                <i ref={toast.json} />
              </div>
              <div className="toast__body">
                <h3 className="toast__title ">{toast.title}</h3>
                <p className="toast__msg">{toast.description}</p>
              </div>
              <div className="toast__close">
                <i
                  className="fa fa-times"
                  onClick={() => deleteToast(toast.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
