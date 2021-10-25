import { useEffect, useRef, useState } from "react";
import "../Styles/Toasts.css";
import lottie from "lottie-web";
const Toasts = () => {
  const success = useRef(null);
  const danger = useRef(null);
  const info = useRef(null);
  const warning = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: success.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./success.json"),
    });
    lottie.loadAnimation({
      container: danger.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./danger.json"),
    });
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./info.json"),
    });
    lottie.loadAnimation({
      container: warning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./warning.json"),
    });
  }, [list]);
  return (
    <>
      <h1>XIn chao</h1>
    </>
  );
};

export default Toasts;
