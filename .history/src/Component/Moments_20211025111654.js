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
      <h1>oke</h1>
    </div>
  );
};

export default Moments;
