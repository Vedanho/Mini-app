import Zarya from "/home-page/zarya-tap.png";
import Konek from "/home-page/konek-tap.png";
import "./index.scss";
import { useHero } from "../../context/HeroContext";
import MoneyIcon from "/common/money-icon.png";
import type { MouseEvent } from "react";

interface Props {
  onTap: () => void;
}

const Hero = ({ onTap }: Props) => {
  const { hero } = useHero();
  const heroes = {
    zarya: {
      img: Zarya,
    },
    konek: {
      img: Konek,
    },
  };

  const handleTap = (event: MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = event;

    const moneyElement = document.createElement("div");
    const moneyIcon = document.createElement("img");
    const moneyCount = document.createElement("span");

    moneyIcon.src = MoneyIcon;
    moneyCount.textContent = "+1";
    moneyElement.className = "money-tap";

    moneyElement.style.left = `${clientX}px`;
    moneyElement.style.top = `${clientY}px`;

    moneyElement.append(moneyIcon, moneyCount);
    document.body.appendChild(moneyElement);

    requestAnimationFrame(() => {
      moneyElement.classList.add("fade-out");
    });

    setTimeout(() => moneyElement.remove(), 1500);
    onTap();
  };

  return (
    <div className="hero">
      <div className="hero__img-wrapp">
        <img src={heroes[hero]?.img} alt="hero" className="hero__img" onPointerDown={handleTap} />
      </div>
    </div>
  );
};

export default Hero;
