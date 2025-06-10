import QrItemImg from "/shop/scan-item.png";
import CoinIcon from "/common/money-icon.png";
import BrilliantIcon from "/common/brilliant.png";
import PotionIcon from "/common/potion.png";
import QrBtn from "/shop/scan-button.png";
import "./index.scss";
import Button from "../ui/Button";
import { useState } from "react";
import QrScanner from "../QrScan";

const MOC_DATA = [
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
  {
    img: QrItemImg,
    label: "Набор инструмента универсальный, 17 предметов",
    bonuses: {
      brilliant: 6,
      coin: 20,
      potion: 10,
    },
  },
];

const Icons = {
  coin: CoinIcon,
  brilliant: BrilliantIcon,
  potion: PotionIcon,
};

const QrListItems = () => {
  const [isShowQrScan, setIsShowQrScan] = useState(false);

  if (isShowQrScan) {
    return <QrScanner onScan={() => alert("scanned")} />;
  }

  return (
    <div className="qr-list">
      <p className="qr-list__text">Покупай эти товары в магазинах «Галамарт» и получай игровые бонусы!</p>
      <div className="qr-list__items viewport-limited">
        {MOC_DATA.map((item, index) => {
          return (
            <div key={index} className="qr-list__item">
              <div className="qr-list__item-img-wrapp">
                <img src={item.img} alt="item" className="qr-list__item-img" />
              </div>
              <div>
                <div className="qr-list__item-label">{item.label}</div>
                <div className="qr-list__item-bonuses">
                  {Object.keys(item.bonuses).map((key, index) => {
                    return (
                      <div className="qr-list__bonus" key={index}>
                        <img width={25} height={25} src={Icons[key as "brilliant" | "coin" | "potion"]} alt="icon" />
                        <span className="qr-list__count">+3</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button className="qr-button" onClick={() => setIsShowQrScan(true)}>
        <img src={QrBtn} alt="qr" />
      </Button>
    </div>
  );
};

export default QrListItems;
