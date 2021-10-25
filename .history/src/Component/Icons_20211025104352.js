import React from "react";

const Icons = (ref) => {
  return (
    <div>
      <i ref={ref}></i>
    </div>
  );
};
const Iconss = React.forwardRef(Icons);
export default Iconss;
