import { Outlet } from "react-router";
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

  return <Outlet />;
};

export default MainLayout;
