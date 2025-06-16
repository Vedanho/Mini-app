import ProgressBarWrapper from "/home-page/progress-bar-wrapper.png";
import Progress from "/home-page/progress.png";
import BarIcon from "/common/money-icon.png";
import "./index.scss";
import { useHeroStore } from "../../store/hero";

const ProgressBar = () => {
  const { tapCoin, maxStats } = useHeroStore();
  const maxTapCoin = maxStats?.maxTapCoin || 0;

  const getBarProgress = () => {
    if (tapCoin >= maxTapCoin) {
      return 100;
    }
    // Calculate progress bar width based on tapCoin and maxValue
    const progress = (tapCoin / maxTapCoin) * 100;
    return progress;
  };

  return (
    <div className="progress-bar">
      <img src={ProgressBarWrapper} alt="bar-wrapper" className="progress-bar__wrapper" />
      <img src={BarIcon} alt="bar-icon" className="progress-bar__bar-icon" />
      {!!maxTapCoin && (
        <img
          src={Progress}
          style={{ width: `calc(${getBarProgress()}% - 7px)` }}
          alt="progress"
          className="progress-bar__progress"
        />
      )}

      <span className="progress-bar__points">
        {tapCoin}/ {maxTapCoin}
      </span>
    </div>
  );
};

export default ProgressBar;
