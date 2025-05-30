import { Outlet } from "react-router";
import Navigation from "../../components/Navigation";
import ScreenBackground from "../../components/ScreenBackground";
import { useEffect } from "react";
import { useHero } from "../../context/HeroContext";
import { useNavigate } from "react-router";

const MainLayout = () => {
  const { hero } = useHero();
  const navigate = useNavigate();
  useEffect(() => {
    if (!hero) {
      navigate("/auth");
    }
  }, []);

  return (
    <ScreenBackground>
      <Navigation />
      <Outlet />
    </ScreenBackground>
  );
};

export default MainLayout;
