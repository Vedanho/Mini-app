import Button from "../ui/Button";
import ArtImg from "/tasks/art.png";
import FlagImg from "/tasks/flag.png";
import NatureImg from "/tasks/nature.png";
import "./index.scss";

const MOC_DATA = [
  {
    img: ArtImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
    ],
  },
  {
    img: FlagImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
    ],
  },
  {
    img: NatureImg,
    title: "История России 5 вопросов",
    reward: [
      { value: 1200, kind: "money" },
      { value: 200, kind: "potion" },
    ],
  },
];

// const rewardIcon = {
  
// }

const TasksList = () => {
  return (
    <div className="tasks-list">
      {MOC_DATA.map((item) => {
        return (
          <div className="tasks-list__item">
            <div>
              <img src={item.img} alt="img" />
            </div>
            <div>
              <div className="tasks-list__title">{item.title}</div>
              {!!item.reward?.length &&
                item.reward.map((reward) => (
                  <div className="tasks-list__reward">
                    <img src={"rewardIcon[reward.kind]"} alt="icon" />
                    <div>
                      <span>награда</span>
                      <span>{reward?.value}</span>
                    </div>
                  </div>
                ))}
              <Button variant="orange">Начать</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
