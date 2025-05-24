import "./index.scss";

const LoadingScreen = () => {
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
