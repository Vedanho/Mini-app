import Hero1 from "/auth/hero_1.png";
import Hero2 from "/auth/hero_2.png";
import Button from "../ui/Button";
import "./index.scss";
import { useHero } from "../../context/HeroContext";
import { useState } from "react";
import { Pages } from "../../pages";
import { useNavigate } from "react-router";
import { useTelegram } from "../../hooks/useTelegram";
import type { Heroes } from "../../constants";
import clsx from "clsx";
import { useHeroStore } from "../../store/hero";

export default function HeroesCheck() {
  const { setHero } = useHero();
  const { checkHero } = useHeroStore();
  const [activeHero, setActiveHero] = useState<string | null>(null);
  const navigate = useNavigate();
  const { webApp } = useTelegram();
  const heroes: { name: string; img: string }[] = [
    {
      name: "zarya",
      img: Hero1,
    },
    {
      name: "konek",
      img: Hero2,
    },
  ];

  const handleConfirm = async () => {
    await checkHero({ heroId: activeHero });
    setHero(activeHero as Heroes);
    navigate(Pages.main);
  };

  const handleCheckHero = (hero: { name: string; img: string }) => {
    if (webApp) {
      webApp.HapticFeedback.selectionChanged();
    }
    setActiveHero(hero?.name);
  };

  return (
    <div className="heroes-check">
      {heroes.map((hero, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "heroes-check__hero-wrapp",
              activeHero === hero?.name && "heroes-check__hero-wrapp--active"
            )}
            onClick={() => handleCheckHero(hero)}
          >
            <img src={hero?.img} alt="hero" className="heroes-check__hero-img" />
          </div>
        );
      })}
      <div className="heroes-check__btn-wrapper">
        <Button className="heroes-check__btn auth-btn" onClick={handleConfirm} disabled={!activeHero}>
          Выбрать героя
        </Button>
      </div>
    </div>
  );
}
