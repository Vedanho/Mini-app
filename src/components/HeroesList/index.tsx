import "./index.scss";
import Zarya from "/heroes/hero-zarya.png";
import Vasilisa from "/heroes/hero-vasilisa.png";
import Yaga from "/heroes/hero-yaga.png";
import Konek from "/heroes/hero-konek.png";
import Koshei from "/heroes/hero-koshei.png";
import Leshii from "/heroes/hero-leshii.png";
import clsx from "clsx";
import { useHero } from "../../context/HeroContext";

const MOC_DATA = [
  {
    img: Zarya,
    disabled: false,
  },
  {
    img: Vasilisa,
    disabled: true,
  },
  {
    img: Yaga,
    disabled: true,
  },
];

const MOC_DATA_2 = [
  {
    img: Konek,
    disabled: false,
  },
  {
    img: Leshii,
    disabled: false,
  },
  {
    img: Koshei,
    disabled: false,
  },
];

const HeroesList = () => {
  const { hero } = useHero();
  const heroes = hero === "konek" ? MOC_DATA_2 : MOC_DATA;
  
  return (
    <div className="heroes-list viewport-limited">
      {heroes.map((item) => {
        return (
          <div className={clsx("heroes-list__img-wrapp", { "heroes-list__img-wrapp--disabled": item.disabled })}>
            <img src={item.img} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default HeroesList;
