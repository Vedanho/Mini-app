import MoneyIcon from "/common/money-icon.png";
import BrilliantIcon from "/common/brilliant.png";
import PotionIcon from "/common/potion.png";
import ProductImg from "/shop/product.png";

import "./index.scss";
import Button from "../ui/Button";

const MOC_DATA = [
  {
    label: "BY Наушники беспроводные",
    img: ProductImg,
    money: 150,
    brilliant: 150,
    potion: 150,
  },
  {
    label: "BY Наушники беспроводные",
    img: ProductImg,
    money: 150,
    brilliant: 150,
    potion: 150,
  },
  {
    label: "BY Наушники беспроводные",
    img: ProductImg,
    money: 150,
    brilliant: 150,
    potion: 150,
  },
  {
    label: "BY Наушники беспроводные",
    img: ProductImg,
    money: 150,
    brilliant: 150,
    potion: 150,
  },
];

const ShopProducts = ({ items = MOC_DATA }) => {
  return (
    <div className="products viewport-limited">
      {items.map((item) => {
        return (
          <div className="products__item">
            <div className="products__img-wrapp">
              <img src={item.img} alt="item" className="products__img" />
            </div>
            <div className="points-info">
              <div className="points-info__label">{item.label}</div>
              <div className="points-info__item points-info__item--money">
                <img width={40} height={40} src={MoneyIcon} alt="icon" className="points-info__money-icon" />
                {item.money}
              </div>
              <div className="points-info__item points-info__item--brilliant">
                <img width={44} height={39} src={BrilliantIcon} alt="icon" className="points-info__brilliant-icon" />
                {item.brilliant}
              </div>
              <div className="points-info__item points-info__item--potion">
                <img width={29} height={44} src={PotionIcon} alt="icon" className="points-info__potion-icon" />
                {item.potion}
              </div>
              <Button className="points-info__btn" variant="orange">
                Купить предмет
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
