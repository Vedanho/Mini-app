import Zarya from "/home-page/zarya-tap.png";
import Konek from "/home-page/konek-tap.png";
import "./index.scss";
import { useHero } from "../../context/HeroContext";
import MoneyIcon from "/common/money-icon.png";
import { useRef, type MouseEvent } from "react";

interface Props {
  onTap: () => void;
}

const Hero = ({ onTap }: Props) => {
  const { hero } = useHero();
  const isTappedRef = useRef(false);
  const heroes = {
    zarya: {
      img: Zarya,
    },
    konek: {
      img: Konek,
    },
  };

  const handleTap = (event: MouseEvent<HTMLImageElement>) => {
    if (isTappedRef.current) return;

    isTappedRef.current = true;
    const { clientX, clientY } = event;
    console.log(event);
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

  const handlePointerUp = () => {
    isTappedRef.current = false;
  };

  return (
    <div className="hero">
      <div className="hero__img-wrapp">
        <img src={heroes[hero]?.img} alt="hero" className="hero__img" onPointerUp={handlePointerUp} onPointerDown={handleTap} />
      </div>
    </div>
  );
};

export default Hero;
