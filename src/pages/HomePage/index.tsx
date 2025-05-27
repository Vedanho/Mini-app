import PointsElements from "../../components/PointsElements";
import ProgressBar from "/home-page/progress-bar.png";
import BarIcon from "/common/money-icon.png";
import Hero from "../../components/Hero";
import EnergyIcon from "/home-page/energy-icon.png";
import Logo from "/home-page/gold-logo.png";

import "./index.scss";

const HomePage = () => {
  return (
    <div className="tap-screen">
      <div className="tap-screen__container container">
        <PointsElements />
        <div className="progress-bar">
          <img src={BarIcon} alt="bar-icon" className="progress-bar__bar-icon" />
          <img src={ProgressBar} alt="progress" className="progress-bar__progress" />
          <span className="progress-bar__points">140 000 / 300 000</span>
        </div>
        <div className="tap-screen__hero">
          <Hero />
        </div>
        <div className="tap-screen__bottom-content">
          <div className="tap-screen__energy-block">
            <img src={EnergyIcon} alt="energy" />
            <div className="tap-screen__energy">
              <span className="tap-screen__title">Энергия</span>
              <span className="tap-screen__energy-count">7600/8000</span>
            </div>
          </div>
          <div className="tap-screen__logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
