import { useEffect } from "react";
import { useHeroStore } from "../store/hero";

const useBackground = () => {
  const { currentHero } = useHeroStore();
  
  useEffect(() => {
    const body = document.querySelector("body");

    if (currentHero) {
      body?.classList.add("background-image")
      body!.id = currentHero
    }
  }, [currentHero])
};

export default useBackground;
