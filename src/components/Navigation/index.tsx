import { Pages } from "../../pages";
import HomeIcon from "../../icons/navigation/home.svg?react";
import Discount from "../../icons/navigation/discount.svg?react";
import Rating from "../../icons/navigation/rating.svg?react";
import Shop from "../../icons/navigation/shop.svg?react";

import "./index.scss";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { useTelegram } from "../../hooks/useTelegram";

const Navigation = () => {
  const location = useLocation();
  const { webApp } = useTelegram();
  const navigationItems = [
    {
      label: "Домой",
      link: Pages.main,
      icon: HomeIcon,
    },
    {
      label: "Магазин",
      link: Pages.shop,
      icon: Shop,
    },
    {
      label: "Мир героев",
      link: Pages.rating,
      icon: Rating,
    },
    {
      label: "Скидки и баллы",
      link: Pages.discount,
      icon: Discount,
    },
  ];

  const handleLinkClick = () => {
    if (webApp) {
      webApp.HapticFeedback.impactOccurred("light");
    }
  };

  return (
    <nav className="navigation">
      {navigationItems.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <Link
            to={item?.link}
            className={clsx("navigation__item", { "navigation__item--active": location.pathname === item.link })}
            key={index}
            onClick={handleLinkClick}
          >
            <IconComponent className="navigation__icon" />
            <span className="navigation__item-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
