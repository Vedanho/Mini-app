import { useEffect } from "react";
import "./index.scss";
import { getCookie } from "../../utils/cookie";
import { TOKEN_NAME } from "../../constants";

const LoadingScreen = () => {
  useEffect(() => {
    if (!!getCookie(TOKEN_NAME)) {
      // navigate("/");
    }
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-screen__loader-block">
        <div className="loading-screen__loader" />
        <span className="loading-screen__text">Загрузка</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
