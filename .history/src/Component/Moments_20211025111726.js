import React, { useEffect, useState } from "react";
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
      setTime(new date(Date.now));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h4>
        <strong>
          <Moment format=" dddd, Do MMMM  YYYY, LT:mm:ss a">{Time}</Moment>
        </strong>
        &nbsp; As of {date} 📅
      </h4>
    </div>
  );
};

export default Moments;
