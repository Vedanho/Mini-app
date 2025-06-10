import { useState, type ReactNode } from "react";
import Tabs from "../../components/Tabs";
import "./index.scss";
import HeroClothes from "../../components/HeroClothes";
import ShopProducts from "../../components/ShopProducts";
import QrListItems from "../../components/QrListItems";

enum Tab {
  HeroClothes = 0,
  Goods = 1,
  Qr = 2,
}

const ShopPage = () => {
  const [activeTab, setActiveTab] = useState(Tab.HeroClothes);

  const tabs = ["Супер сила", "Товары", "Скан QR"];
  const getContent = (): ReactNode => {
    switch (activeTab) {
      case Tab.HeroClothes:
        return <HeroClothes />;
      case Tab.Goods:
        return <ShopProducts />;
      case Tab.Qr:
        return <QrListItems />;
    }
  };

  return (
    <div className="shops-page">
      <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      {getContent()}
    </div>
  );
};

export default ShopPage;
