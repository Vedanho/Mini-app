import Button from "../ui/Button";
import HearPhones from "/shop/hearphones.png";
import Glasses from "/shop/glasses.png";
import MoneyIcon from "/common/money-icon.png";
import BrilliantIcon from "/common/brilliant.png";
import PotionIcon from "/common/potion.png";
import ZaryaEllipse from "/shop/ellipse-zarya.png";
import Konekllipse from "/shop/ellipse-konek.png";
import "./index.scss";
import { useHero } from "../../context/HeroContext";
import clsx from "clsx";
import HeroItemModal from "../HeroItemModal";
import { useState } from "react";

const MOC_DATA = [
  {
    img: HearPhones,
    money: 3857,
    brilliant: 60,
    potion: 76,
    level: 2,
    disabled: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    img: Glasses,
    money: 3857,
    brilliant: 60,
    potion: 76,
    level: 2,
    disabled: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    img: HearPhones,
    money: 3857,
    brilliant: 60,
    potion: 76,
    level: 2,
    disabled: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    img: HearPhones,
    money: 3857,
    brilliant: 60,
    potion: 76,
    level: 2,
    disabled: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

export interface ActiveItem {
  img: string;
  money: number;
  brilliant: number;
  potion: number;
  level: number;
  disabled: boolean;
  description: string;
}

const HeroClothes = ({ items = MOC_DATA }) => {
  const { hero } = useHero();
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  const backgoroundEliipse = {
    zarya: ZaryaEllipse,
    konek: Konekllipse,
  };

  return (
    <div className="hero-items viewport-limited">
      {items?.map((item) => {
        return (
          <div className={clsx("hero-items__item", item?.disabled && "hero-items__item--disabled")}>
            <div className="hero-items__img-wrapp">
              <img src={backgoroundEliipse[hero]} alt="bg" className="hero-items__img-ellipse" />
              <img width={133} height={120} src={item.img} alt="item" className="hero-items__img" />
              <span className="hero-items__level">
                {item?.level}
                <span>ур</span>
              </span>
            </div>
            <div className="points-info">
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
              <Button className="points-info__btn" variant="orange" onClick={() => setActiveItem(item)}>
                Купить предмет
              </Button>
            </div>
          </div>
        );
      })}
      {activeItem && <HeroItemModal activeItem={activeItem} onClose={() => setActiveItem(null)} />}
    </div>
  );
};

export default HeroClothes;
