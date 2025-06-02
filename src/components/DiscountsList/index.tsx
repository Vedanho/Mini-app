import Button from "../ui/Button";
import MoneyIcon from "/common/money-icon.png";

import "./index.scss";
import clsx from "clsx";
import type { Points } from "../../pages/DiscountPage";

const DiscountsList = ({ discounts = [], isPointsList = false }: { discounts: Points[]; isPointsList?: boolean }) => {
  return (
    <div className="points-list">
      {discounts.map((item) => {
        return (
          <div className={clsx("points-list__item", { "points-list__item--discount": !isPointsList })}>
            <img width={120} height={120} src={item.img} alt="img" className="points-list__img" />
            <div>
              <div className="points-list__title">{item.label}</div>
              <div className="points-list__discount">
                <span>{item.discount}</span>
                <img width={28} height={28} src={MoneyIcon} alt="icon" />
              </div>
              <Button className="points-list__btn" variant="orange">
                {isPointsList ? "Обменять" : "Купить"}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiscountsList;
