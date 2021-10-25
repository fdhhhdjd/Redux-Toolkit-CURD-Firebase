import React from "react";
const Button = ({ btn, handleClick, children, handleSubmit }) => (
  <button className={btn} onClick={(handleClick, handleSubmit)}>
    {children}
  </button>
);

export default Button;
