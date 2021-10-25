import React from "react";
import "../Styles/toast.css";
const Toast = (props) => {
  const { list, setList } = props;
  return (
    <>
      <div id="toast">
        {list.map((item, index) => {
          return (
            <>
              <div className={`toast ${item.backgroundColor}`} key={index}>
                <div className="toast__icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="toast__body">
                  <h3 className="toast__title">{item.title}</h3>
                  <p className="toast__msg">{item.description}</p>
                </div>
                <div className="toast__close">
                  <i
                    className="fa fa-times"
                    onClick={() => deleteToast(item.id)}
                  ></i>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Toast;
