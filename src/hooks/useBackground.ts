import { useEffect } from "react";
import { useHero } from "../context/HeroContext";

const useBackground = () => {
  const { hero } = useHero();

  useEffect(() => {
    const body = document.querySelector("body");

    if (hero) {
      body?.classList.add("background-image")
      body!.id = hero
    }
  }, [hero])
};

export default useBackground;
