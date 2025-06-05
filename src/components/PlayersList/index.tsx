import "./index.scss";
import Img from "/home-page/konek-tap.png";
import MoneyIcon from "/common/money-icon.png";
import Emoji from "/rating/emoji.png";
import { useState } from "react";

const MOC_DATA = [
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },

  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
  {
    rating: 1,
    name: "player",
    avatar: Img,
    score: 249999,
  },
];

const EmptyRating = () => {
  return (
    <div className="empty-rating">
      <div className="empty-rating__head">
        <img width={120} height={120} src={Emoji} alt="emoji" />
        <div className="empty-rating__title">Топ игроков уже на подходе!</div>
      </div>
      <div className="empty-rating__text">
        Мы наводим порядок в таблице: считаем очки, раздаём медали и фиксируем места в рейтинге.
      </div>
    </div>
  );
};

const PlayersList = () => {
  const [isShowEmptyRating, setIsShowEmptyRating] = useState(false);

  if (isShowEmptyRating) {
    return <EmptyRating />;
  }

  return (
    <div className="players-list viewport-limited" onClick={() => setIsShowEmptyRating(true)}>
      {MOC_DATA.map((item) => {
        return (
          <div className="players-list__item">
            <div className="players-list__rating">
              <span>{item.rating}</span>
            </div>
            <div className="players-list__info">
              <div className="players-list__avatar-wrapp">
                <img width={47} height={44} src={item.avatar} alt="avatar" className="players-list__avatar" />
              </div>
              <span className="players-list__player-name">{item.name}</span>
            </div>
            <div className="players-list__score">
              <img width={25} height={25} src={MoneyIcon} alt="icon" />
              <span className="players-list__score-count">{item.score}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersList;
