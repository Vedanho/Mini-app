import Potion from "/common/potion.png";
import Brilliant from "/common/brilliant.png";
import "./index.scss";
import Avatar from "../Avatar";
import { useHeroStore } from "../../store/hero";

const PointsElements = () => {
  const { crystal, bottle } = useHeroStore();

  return (
    <div className="points">
      <Avatar />
      <div className="points__inner">
        <div className="points__block">
          <img src={Brilliant} alt="brilliant" className="points__img" />
          <div className="points__count">{crystal}</div>
        </div>
        <div className="points__block">
          <img src={Potion} alt="potion" className="points__img points__img--potion" />
          <div className="points__count">{bottle}</div>
        </div>
      </div>
    </div>
  );
};

export default PointsElements;
