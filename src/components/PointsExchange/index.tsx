import "./index.scss";
import CoinsImg from "/discount/points.png";
import MoneyIcon from "/common/money-icon.png";
import CoinsStack from "/discount/coins-stack.png";
import Button from "../ui/Button";
import { useState } from "react";
import ExchangeModal from "../ExchangeModal";

const PointsExchange = () => {
  const [pointsCount, setPointsCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleIncrement = () => {
    setPointsCount(pointsCount + 500);
  };

  const handleDecrement = () => {
    if (pointsCount > 0) {
      setPointsCount(pointsCount - 500);
    }
  };

  return (
    <div className="exchange">
      <div className="exchange__top">
        <img src={CoinsImg} alt="coins" />
        <div>
          <p className="exchange__title">Обмен монет на баллы по курсу</p>
          <div className="exchange__info">
            1 <img width={29} height={29} src={CoinsImg} alt="coins" /> за 500{" "}
            <img width={29} height={29} src={MoneyIcon} alt="icon" />
          </div>
        </div>
      </div>
      <div className="exchange__content">
        <p className="exchange__content-text">Добавте нужное количество монет для обмена</p>
        <div className="exchange__counter">
          <Button className="exchange__counter-btn" onClick={handleDecrement}>
            -
          </Button>
          <div className="exchange__points-count">
            {pointsCount} <img width={20} height={20} src={MoneyIcon} alt="icon" />
          </div>
          <Button className="exchange__counter-btn" onClick={handleIncrement}>
            +
          </Button>
        </div>
        <p className="exchange__result-text">При обмене вы получите:</p>
        <div className="exchange__result-block">
          <span>101</span>
          <img width={31} height={31} src={CoinsStack} alt="coins" />
        </div>
        <Button disabled={!pointsCount} variant="orange" className="exchange__btn" onClick={() => setIsOpenModal(true)}>
          Обменять
        </Button>
      </div>
      {isOpenModal && <ExchangeModal isOpenModal={isOpenModal} onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default PointsExchange;
