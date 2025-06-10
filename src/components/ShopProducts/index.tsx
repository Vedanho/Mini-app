import MoneyIcon from "/common/money-icon.png";
import BrilliantIcon from "/common/brilliant.png";
import PotionIcon from "/common/potion.png";
import ProductImg from "/shop/product.png";
import QrImage from "/shop/qr-code.png";

import "./index.scss";
import Button from "../ui/Button";
import Tabs from "../Tabs";
import { useState } from "react";
import ProductModal from "../ProductModal";


enum TabsEnum {
  MyPurchases = 0,
  ShopProducts = 1,
}

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

const PURCHASES = [
  {
    img: ProductImg,
    label: "BY Наушники беспроводные TWS Echo, вкладыши, 30/250 мАч, BT5.3, черный.",
    duration: 16,
  },
  {
    img: ProductImg,
    label: "BY Наушники беспроводные TWS Echo, вкладыши, 30/250 мАч, BT5.3, черный.",
    duration: 16,
  },
  {
    img: ProductImg,
    label: "BY Наушники беспроводные TWS Echo, вкладыши, 30/250 мАч, BT5.3, черный.",
    duration: 16,
  },
  {
    img: ProductImg,
    label: "BY Наушники беспроводные TWS Echo, вкладыши, 30/250 мАч, BT5.3, черный.",
    duration: 16,
  },
  {
    img: ProductImg,
    label: "BY Наушники беспроводные TWS Echo, вкладыши, 30/250 мАч, BT5.3, черный.",
    duration: 16,
  },
];

const ProductsComponent = () => {
  const [activeProduct, setActiveProduct] = useState<(typeof MOC_DATA)[0] | null>(null);

  return (
    <div className="products viewport-limited">
      {MOC_DATA.map((item) => {
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
              <Button onClick={() => setActiveProduct(item)} className="points-info__btn" variant="orange">
                Купить предмет
              </Button>
            </div>
          </div>
        );
      })}
      {!!activeProduct && (
        <ProductModal
          activeProduct={activeProduct}
          isModalOpen={!!activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </div>
  );
};

const PurchasesComponent = () => {
  const [activePurchase, setActivePurchase] = useState<(typeof PURCHASES)[0] | null>(null);

  if (activePurchase) {
    return (
      <div className="purchase">
        <p className="purchase__title">Покажите QR код на кассе и получите скидку 99%</p>
        <div className="purchase__content">
          <div className="purchase__top"> 
            <img src={activePurchase.img} alt="item" />
            <p className="purchase__label">{activePurchase.label}</p>
          </div>
          <img src={QrImage} alt="qr" className="purchase__qr" />
        </div>
      </div>
    );
  }

  return (
    <div className="purchases-list viewport-limited">
      {PURCHASES.map((item) => {
        return (
          <div className="purchases-list__item">
            <img src={item.img} alt="img" className="purchases-list__item-img" />
            <div>
              <p className="purchases-list__item-label">{item.label}</p>
              <Button className="purchases-list__btn" variant="orange" onClick={() => setActivePurchase(item)}>
                Показать QR-код
              </Button>
            </div>
            <div className="purchases-list__duration">
              <p className="purchases-list__duration-text">Срок действия</p>
              <div className="purchases-list__duration-time">{item.duration} дней</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ShopProducts = () => {
  const tabs = ["Мои покупки", "Магазин товаров"];
  const [activeTab, setActiveTab] = useState(TabsEnum.MyPurchases);

  return (
    <div className="page-content">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="discount-notice">
        <p className="discount-notice__text">Скидки на товары в магазинах «Галамарт» </p>
        <p className="discount-notice__subtext">Количество товара ограничено</p>
      </div>
      {activeTab === TabsEnum.ShopProducts && <ProductsComponent />}
      {activeTab === TabsEnum.MyPurchases && <PurchasesComponent />}
    </div>
  );
};

export default ShopProducts;
