import { useState, type ReactNode } from "react";
import Tabs from "../../components/Tabs";
import "./index.scss";
import PlayersList from "../../components/PlayersList";
import TasksList from "../../components/TasksList";

enum Tab {
  PlayersList = 0,
  Tasks = 1,
  HeroesList = 2,
}

const RatingPage = () => {
  const [activeTab, setActiveTab] = useState(Tab.PlayersList);

  const tabs = ["Игроки", "Задания", "Супер"];
  const getContent = (): ReactNode => {
    switch (activeTab) {
      case Tab.PlayersList:
        return <PlayersList />;
      case Tab.Tasks:
        return <TasksList />;
      case Tab.HeroesList:
        return <div>Qr</div>;
    }
  };

  return (
    <div className="shops-page">
      <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      {getContent()}
    </div>
  );
};

export default RatingPage;
