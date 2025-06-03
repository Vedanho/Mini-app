import PointsElements from "../../components/PointsElements";

import Hero from "../../components/Hero";
import EnergyIcon from "/home-page/energy-icon.png";
import Logo from "/home-page/gold-logo.png";

import "./index.scss";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";

const HomePage = () => {
  const [tabCount, setTabCount] = useState(0);
  const maxValue = 100;

  const onTap = () => {
    if (tabCount >= maxValue) {
      return;
    }
    setTabCount((prev) => prev + 1);
  };

  return (
    <div className="tap-screen">
      <div className="tap-screen__container container">
        <PointsElements />
        <ProgressBar tabCount={tabCount} maxValue={maxValue} />
        <div className="tap-screen__content">
          <Hero onTap={onTap} />
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
    </div>
  );
};

export default HomePage;
