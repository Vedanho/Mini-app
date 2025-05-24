import type { ReactNode } from "react";
import "./index.scss";
import ZaryaBg from "/common/zarya-bg.png";
import KonekBg from "/common/konek-bg.png";
import { useHero } from "../../context/HeroContext";

interface Props {
  children: ReactNode;
}

const ScreenBackground = ({ children }: Props) => {
  const { hero } = useHero();
  const backgroundImages = {
    zarya: ZaryaBg,
    konek: KonekBg,
  };
  const backgroundImage = backgroundImages[hero];
  return (
    <div className="screen-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};

export default ScreenBackground;
