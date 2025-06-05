import Button from "../ui/Button";
import ArtImg from "/tasks/art.png";
import FlagImg from "/tasks/flag.png";
import NatureImg from "/tasks/nature.png";
import MoneyIcon from "/common/money-icon.png";
import Brilliant from "/common/brilliant.png";
import Potion from "/common/potion.png";
import "./index.scss";
import Quiz from "../Quiz";
import { useState } from "react";
import clsx from "clsx";

const MOC_DATA = [
  {
    id: "history",
    img: ArtImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
    ],
    isCompleted: true,
  },
  {
    id: "art",
    img: FlagImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
      { value: 200, kind: "brilliant" },
    ],
    isFailed: true,
  },
  {
    id: "nature",
    img: NatureImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
    ],
  },
];

const rewardIcon = {
  money: MoneyIcon,
  brilliant: Brilliant,
  potion: Potion,
};

const TasksList = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  if (activeQuiz) {
    return <Quiz />;
  }

  const renderButton = (item: (typeof MOC_DATA)[0]) => {
    if (item.isCompleted) {
      return <div className="result-text">Успешно пройден</div>;
    }
    if (item.isFailed) {
      return <div className="result-text">Квиз провален</div>;
    }
    return (
      <Button variant="orange" onClick={() => setActiveQuiz(item.id)}>
        Начать
      </Button>
    );
  };

  return (
    <div className="tasks-list viewport-limited">
      {MOC_DATA.map((item) => {
        return (
          <div className={clsx("tasks-list__item", item.isFailed && "tasks-list__item--failed")}>
            <div className={clsx("tasks-list__img-wrapp", item.isCompleted && "completed-icon")}>
              <img width={100} height={100} src={item.img} alt="img" className="tasks-list__img" />
            </div>
            <div>
              <div className="tasks-list__title">{item.title}</div>
              <div className="tasks-list__rewards-wrapp">
                {!!item.reward?.length && (
                  <div className="tasks-list__rewards">
                    {item.reward.map((reward) => (
                      <div className="tasks-list__reward" key={reward.kind}>
                        <img
                          width={31}
                          height={31}
                          src={rewardIcon[reward.kind as keyof typeof rewardIcon]}
                          alt="icon"
                          className="tasks-list__reward-icon"
                        />
                        <span className="tasks-list__reward-title">награда</span>
                        <span className="tasks-list__reward-count">{reward.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {renderButton(item)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
