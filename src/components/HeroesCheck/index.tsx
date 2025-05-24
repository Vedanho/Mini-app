import { Swiper, SwiperSlide } from "swiper/react";
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

export default function HeroesCheck() {
  const { setHero } = useHero();
  const [activeHero, setActiveHero] = useState<string | null>(null);
  const navigate = useNavigate();
  const { webApp } = useTelegram();
  const heroes: { hero: string; img: string }[] = [
    {
      hero: "zarya",
      img: Hero1,
    },
    {
      hero: "konek",
      img: Hero2,
    },
  ];

  const handleCheckHero = () => {
  
    setHero(activeHero as Heroes);
    navigate(Pages.main);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSlideChange = (swiper: any) => {
    const currentHero = heroes[swiper.realIndex]?.hero;

    if (webApp) {
      webApp.HapticFeedback.selectionChanged();
    }
    setActiveHero(currentHero || null);
  };

  return (
    <div className="heroes-check">
      <Swiper slidesPerView="auto" loop={true} className="heroes-check__swiper" onSlideChange={onSlideChange}>
        {heroes?.map((el) => (
          <SwiperSlide key={el.img} onChange={() => setActiveHero(el.hero)}>
            <div className="heroes-check__item">
              <img className="heroes-check__img" src={el.img} alt="hero" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="heroes-check__btn-wrapper">
        <Button className="heroes-check__btn auth-btn" onClick={handleCheckHero}>
          Выбрать героя
        </Button>
      </div>
    </div>
  );
}
