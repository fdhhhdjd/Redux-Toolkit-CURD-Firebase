import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/vi";
const Moments = () => {
  const [Time, setTime] = useState("");
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
    "/" +
    today.getFullYear();
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>
        <strong>
          <Moment format=" dddd, Do MMMM  YYYY, LT:mm:ss a">{Time}</Moment>
        </strong>
        &nbsp; As of {date} 📅
      </h2>
    </div>
  );
};

export default Moments;
