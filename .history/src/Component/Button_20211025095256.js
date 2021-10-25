import React from "react";
const Button = ({ children, handleClick, btn }) => (
  <button className={btn} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
