import Button from "../ui/Button";
import MoneyIcon from "/common/money-icon.png";

import "./index.scss";
import clsx from "clsx";
import type { Points } from "../../pages/DiscountPage";
import DiscountModal from "../DiscountModal";
import { useState } from "react";

const DiscountsList = ({ discounts = [], isPointsList = false }: { discounts: Points[]; isPointsList?: boolean }) => {
  const [activeDiscount, setActiveDiscount] = useState<Points | null>(null);

  return (
    <div className="points-list viewport-limited">
      <p className="points-list__text">Скидки в магазинах «Галамарт»</p>
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
              <Button className="points-list__btn" variant="orange" onClick={() => setActiveDiscount(item)}>
                Купить
              </Button>
            </div>
          </div>
        );
      })}
      {activeDiscount && <DiscountModal isModalOpen={!!activeDiscount} onClose={() => setActiveDiscount(null)} activeDiscount={activeDiscount} />}
    </div>
  );
};

export default DiscountsList;
