import Zarya from "/home-page/zarya-tap.png";
import Konek from "/home-page/konek-tap.png";
import "./index.scss";
import { useHero } from "../../context/HeroContext";
import MoneyIcon from "/common/money-icon.png";
import { useEffect, useRef, type MouseEvent } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { socketInit } from "../../socket";
import { useHeroStore } from "../../store/hero";
// import { socket } from "../../socket";

const Hero = () => {
  const socket = socketInit();
  const {
    setData,
    getMaxStats,
    tapCoin,
    maxStats: { maxTapCoin },
  } = useHeroStore();

  const { webApp } = useTelegram();
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

    if (webApp) {
      webApp.HapticFeedback.impactOccurred("light");
    }

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

    if (maxTapCoin === tapCoin) return;

    const timestamp = Date.now();
    const socketData = [1, clientX.toFixed(3), clientY.toFixed(3), timestamp, 1];
    socket.send(JSON.stringify(socketData));

    // if (socket.readyState === WebSocket.CLOSED) {
    //   socketInit();
    // }
  };

  const handlePointerUp = () => {
    isTappedRef.current = false;
  };

  useEffect(() => {
    getMaxStats();
    console.log("Socket is connecting");

    socket.onopen = () => {
      console.log("Socket is connected");
    };

    socket.onerror = (error) => {
      console.log(error);
    };

    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setData(data);
    };

    socket.onclose = () => {
      console.log("Socket is closed");
    };

    return () => {
      socket.onopen = null;
      socket.onerror = null;
      socket.onmessage = null;
      socket.onclose = null;
    };
  }, []);

  return (
    <div className="hero">
      <img
        src={heroes[hero]?.img}
        alt="hero"
        className="hero__img"
        onPointerUp={handlePointerUp}
        onPointerDown={handleTap}
      />
    </div>
  );
};

export default Hero;

//timestep - текущее время игрока
//tap_multiple - скок прибавится монеток за клик
// тапаю у себя по своей метрике, заполняю по инфе которая приходит с бэка
