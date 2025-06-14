import ProgressBarWrapper from "/home-page/progress-bar-wrapper.png";
import Progress from "/home-page/progress.png";
import BarIcon from "/common/money-icon.png";
import "./index.scss";
import { useHeroStore } from "../../store/hero";

const ProgressBar = ({ maxValue }: { maxValue: number }) => {
  const { tapCoin } = useHeroStore();
  const progress = (tapCoin / maxValue) * 100;

  return (
    <div className="progress-bar">
      <img src={ProgressBarWrapper} alt="bar-wrapper" className="progress-bar__wrapper" />
      <img src={BarIcon} alt="bar-icon" className="progress-bar__bar-icon" />
      <img
        src={Progress}
        style={{ width: `calc(${progress}% - 7px)` }}
        alt="progress"
        className="progress-bar__progress"
      />
      <span className="progress-bar__points">
        {tapCoin}/ {maxValue}
      </span>
    </div>
  );
};

export default ProgressBar;
