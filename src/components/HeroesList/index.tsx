import "./index.scss";
import Zarya from "/heroes/hero-zarya.png";
import Vasilisa from "/heroes/hero-vasilisa.png";
import Yaga from "/heroes/hero-yaga.png";
import clsx from "clsx";

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

const HeroesList = () => {
  return (
    <div className="heroes-list viewport-limited">
      {MOC_DATA.map((item) => {
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
