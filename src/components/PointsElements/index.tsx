import Potion from "/common/potion.png";
import Brilliant from "/common/brilliant.png";
import "./index.scss";

const PointsElements = () => {
  return (
    <div className="points">
      <div className="points__inner">
        <div className="points__block">
          <img src={Brilliant} alt="brilliant" className="points__img" />
          <div className="points__count">120</div>
        </div>
        <div className="points__block">
          <img src={Potion} alt="potion" className="points__img points__img--potion" />
          <div className="points__count">132</div>
        </div>
      </div>
    </div>
  );
};

export default PointsElements;
