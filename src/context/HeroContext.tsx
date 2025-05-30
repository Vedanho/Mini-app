import { createContext, useContext, useState, type ReactNode } from "react";

type Hero = "zarya" | "konek";

interface HeroContextType {
  hero: Hero;
  setHero: (value: Hero) => void;
}

const HeroContext = createContext<HeroContextType | null>(null);

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [hero, setHero] = useState<Hero | null>();

  return <HeroContext.Provider value={{ hero: hero!, setHero }}>{children}</HeroContext.Provider>;
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) throw new Error("useHero must be used within HeroProvider");

  return context;
};
