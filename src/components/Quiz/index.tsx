import Checkbox from "../ui/Checkbox";
import "./index.scss";
import MocImg from "/tasks/flag.png";

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="quiz__label">
        <div className="quiz__img-wrapper">
          <img src={MocImg} alt="quiz" />
        </div>
        <div className="quiz__label-name">История России 5 вопросов</div>
      </div>
      <div className="quiz__questions">
        <div className="quiz__questions-list">
          <div className="quiz__question">
            <div className="quiz__questions-item-label">Вопрос №1</div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="quiz__answers">
              <Checkbox label="answer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
