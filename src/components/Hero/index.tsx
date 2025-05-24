import Zarya from "/home-page/zarya-tap.png";
import Konek from "/home-page/konek-tap.png";
import "./index.scss";
import { useHero } from "../../context/HeroContext";

const Hero = () => {
  const { hero } = useHero();
  const heroes = {
    zarya: {
      img: Zarya,
    },
    konek: {
      img: Konek,
    },
  };

  return (
    <div className="hero">
      <div className="hero__img-wrapp">
        <img src={heroes[hero]?.img} alt="hero" className="hero__img" />
      </div>
    </div>
  );
};

export default Hero;
