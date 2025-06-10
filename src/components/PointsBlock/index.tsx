import clsx from "clsx";
import "./index.scss";
import BrilliantIcon from "/common/brilliant.png";
import CoinsIcon from "/common/coins.png";
import PotionIcon from "/common/potion.png";
import CoinsStack from "/common/coins-stack.png";

interface Props {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  points: number;
}

type PointsIcon = "brilliant" | "potion" | "coins";

const PointsBlock = ({ icon, iconWidth, iconHeight, points }: Props) => {
  const icons = {
    brilliant: BrilliantIcon,
    potion: PotionIcon,
    coins: CoinsIcon,
    coinsStack: CoinsStack,
  };

  return (
    <div className={clsx("points-block", `points-block--${icon}`)}>
      <img
        width={iconWidth}
        height={iconHeight}
        src={icons[icon as PointsIcon]}
        alt="icon"
        className="points-block__icon"
      />
      <div className="points-block__count">{points}</div>
    </div>
  );
};

export default PointsBlock;
