import { useEffect, useRef, useState } from "react";
import "../Styles/Toasts.css";
import lottie from "lottie-web";
const Toasts = () => {
  const [list, setList] = useState([]);
  let toastProperties = null;
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
      animationData: require("../Json/success.json"),
    });
    lottie.loadAnimation({
      container: danger.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/danger.json"),
    });
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/info.json"),
    });
    lottie.loadAnimation({
      container: warning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/warning.json"),
    });
  }, [list]);
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "Thành công ",
          backgroundColor: "toast--success",
          json: success,
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "Thất bại",
          backgroundColor: "toast--error",
          button: "btn btn--danger",
          json: danger,
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "Khá thành công",
          backgroundColor: "toast--info",
          json: info,
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "Gần thất bại",
          backgroundColor: "toast--warning",
          json: warning,
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, properties]);
  };
  return (
    <>
      <h1>XIn chao</h1>
    </>
  );
};

export default Toasts;
