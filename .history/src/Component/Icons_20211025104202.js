import React from "react";

const Icons = (toast) => {
  return (
    <div>
      <i ref={toast.json}></i>
    </div>
  );
};
const Iconss = React.forwardRef(Icons);
export default Iconss;
