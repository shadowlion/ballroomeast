import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "../style/global.css";

const _App = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
};

export default _App;
