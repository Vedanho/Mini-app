import { useState, type ReactNode } from "react";
import Tabs from "../../components/Tabs";
import "./index.scss";
import DiscountsList from "../../components/DiscountsList";
import DiscountImg from "/discount/discount.png";
import PointsExchange from "../../components/PointsExchange";

enum Tab {
  Points = 0,
  Discount = 1,
}

export interface Points {
  img: string;
  label: string;
  discount: string | number;
}

const DiscountPage = () => {
  const [activeTab, setActiveTab] = useState(Tab.Points);

  const discounts = [
    {
      img: DiscountImg,
      label: "Скидка 10% на белые цены",
      discount: 20000,
    },
    {
      img: DiscountImg,
      label: "Скидка 10% на белые цены",
      discount: 20000,
    },
    {
      img: DiscountImg,
      label: "Скидка 10% на белые цены",
      discount: 20000,
    },
  ];

  const tabs = ["Баллы", "Скидки"];
  const getContent = (): ReactNode => {
    switch (activeTab) {
      case Tab.Points:
        return <PointsExchange />;
      case Tab.Discount:
        return <DiscountsList discounts={discounts} />;
    }
  };

  return (
    <div className="shops-page">
      <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} isSeparatedTabs={true} />
      {getContent()}
    </div>
  );
};

export default DiscountPage;
