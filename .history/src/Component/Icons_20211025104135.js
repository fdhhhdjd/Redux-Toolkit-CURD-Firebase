import React from "react";

const Icons = (toast) => {
  return (
    <div>
      <i ref={toast.json}></i>
    </div>
  );
};
const Icons = React.forwardRef(i);

export default Icons;
