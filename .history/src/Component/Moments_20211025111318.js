import React, { useEffect } from "react";
import Moment from "react-moment";
const Moments = () => {
  let today = new Date();
  let date =
    today.getDate() +
    "/" +
    today.getHours() +
    "/" +
    today.getMinutes +
    today.getSeconds() +
    today.getMonth() +
    1 +
    today.getFullYear();
  useEffect(() => {
    const timer = setInterval(() => {}, 1000);
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
