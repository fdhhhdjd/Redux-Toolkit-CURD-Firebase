import React, { useEffect } from "react";
import Moment from "react-moment";
const Moments = () => {
  const [time, setTime] = useState("");
  let today = new Date();
  let date =
    today.getDate() +
    "/" +
    // today.getHours() +
    // "/" +
    // today.getMinutes +
    // today.getSeconds() +
    today.getMonth() +
    1 +
    today.getFullYear();
  useEffect(() => {
    const timer = setInterval(() => {
      set;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>oke</h1>
    </div>
  );
};

export default Moments;
