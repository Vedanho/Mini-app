import { Outlet } from "react-router";
import Navigation from "../../components/Navigation";
import ScreenBackground from "../../components/ScreenBackground";

const MainLayout = () => {
  return (
    <ScreenBackground>
      <Navigation />
      <Outlet />
    </ScreenBackground>
  );
};

export default MainLayout;
