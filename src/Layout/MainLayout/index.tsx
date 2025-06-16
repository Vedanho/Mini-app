import { Outlet } from "react-router";
import { useEffect } from "react";
import { useHero } from "../../context/HeroContext";
import { useNavigate } from "react-router";
import useBackground from "../../hooks/useBackground";

const MainLayout = () => {
  const { hero } = useHero();
  const navigate = useNavigate();
  useBackground();

  useEffect(() => {
    if (!hero) {
      navigate("/auth");
    }
  }, []);

  return <Outlet />;
};

export default MainLayout;
