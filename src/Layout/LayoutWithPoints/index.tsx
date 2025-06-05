import { Outlet } from "react-router";
import MiniLogo from "/common/logo.png";
import MoneyIcon from "/common/money-icon.png";
import Brilliant from "/common/brilliant.png";
import Potion from "/common/potion.png";
import "./index.scss";
import Avatar from "../../components/Avatar";

const LayoutWithPoints = () => {
  const Layout = () => {
    return (
      <div className="points-layout">
        <Avatar />
        <img src={MiniLogo} alt="logo" className="points-layout__logo" />
        <div className="points-layout__points-wrapp">
          <div className="points-layout__points-block">
            <img src={MoneyIcon} alt="money-icon" className="points-layout__points-img" />
            <span className="points-layout__points-count">345</span>
          </div>
          <div className="points-layout__points-block">
            <img src={Brilliant} alt="brilliant" className="points-layout__points-img" />
            <span className="points-layout__points-count">94</span>
          </div>
          <div className="points-layout__points-block">
            <img src={Potion} alt="potion" className="points-layout__points-img" />
            <span className="points-layout__points-count">86</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <Layout />
      <Outlet />
    </div>
  );
};

export default LayoutWithPoints;
