import { useState } from "react";
import Checkbox from "../ui/Checkbox";
import "./index.scss";
import MocImg from "/tasks/nature.png";
import Success from "/tasks/right-result.png";
import Fail from "/tasks/wrong-result.png";
import MoneyIcon from "/common/money-icon.png";
import Potion from "/common/potion.png";
import clsx from "clsx";

const MOC_DATA = [
  {
    id: "nature",
    img: MocImg,
    question: "Вопрос №1",
    title: "Природа в России 5 вопросов",
    answers: [
      {
        id: "answer1",
        label: "Right",
        isCorrect: true,
      },
      {
        id: "answer2",
        label: "Wrong",
        isCorrect: false,
      },
    ],
  },
];

const Quiz = () => {
  const [activeAnswer, setActiveAnswer] = useState<{
    id: string;
    label: string;
    isCorrect: boolean;
  } | null>(null);

  const renderContent = () => {
    if (activeAnswer) {
      const title = activeAnswer?.isCorrect
        ? "Поздравляем! Вы успешно прошли опрос и получили награду"
        : "Неудача, к сожалению вы допустили ошибки.";

      const imgSrc = activeAnswer?.isCorrect ? Success : Fail;

      return (
        <div className="quiz-result">
          <div className="quiz-result__title">{title}</div>
          <img src={imgSrc} alt="img" className="quiz-result__img" />
          {!activeAnswer?.isCorrect ? (
            <div className="fail-text">Повезёт в следующий раз!</div>
          ) : (
            <div className="quiz-result__rewards">
              <div className="quiz-result__reward">
                <span className="quiz-result__rewards-count">+1200</span>
                <img width={48} height={48} src={MoneyIcon} alt="img" />
              </div>
              <div className="quiz-result__reward">
                <span className="quiz-result__rewards-count">+110</span>
                <img width={48} height={48} src={Potion} alt="img" />
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="quiz__questions">
        <div className="quiz__questions-list">
          {MOC_DATA.map((item, index) => (
            <>
              <div key={index} className="quiz__question">
                <div className="quiz__questions-item-label">{item.question}</div>
              </div>
              {item.answers.map((answer, index) => (
                <div key={index} className="quiz__answers">
                  <Checkbox label={answer.label} onChange={() => setActiveAnswer(answer)} />
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="quiz">
      <div className="quiz__label">
        <div className={clsx("quiz__img-wrapper", activeAnswer?.isCorrect && "completed-icon")}>
          <img src={MocImg} alt="quiz" />
        </div>
        <div className="quiz__label-name">Природа в России 5 вопросов</div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Quiz;
