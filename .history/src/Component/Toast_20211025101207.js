import React, { useCallback, useContext, useEffect, useRef } from "react";
import "../Styles/toast.css";
import { ToastContext } from "../ToastContext/ToastContext";
const Toast = () => {
  const { list, setList } = useContext(ToastContext);
  const success = useRef(null);
  const danger = useRef(null);
  const info = useRef(null);
  const warning = useRef(null);
  const deleteToast = useCallback(
    (id) => {
      const listItem = list.filter((e) => e.id !== id);
      setList(listItem);
    },
    [list, setList]
  );
  useEffect(() => {
    lottie.loadAnimation({
      container: success.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/success.json"),
    });
    lottie.loadAnimation({
      container: danger.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/danger.json"),
    });
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/info.json"),
    });
    lottie.loadAnimation({
      container: warning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/warning.json"),
    });
  }, [list]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id);
      }
    }, 1500);

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
                <i ref={toast.json}></i>
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
