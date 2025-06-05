import Button from "../ui/Button";
import Icon from "/common/error-icon.png";
import "./index.scss";

const ErrorBlock = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="error-block">
      <div className="error-block__inner">
        <div className="error-block__head">
          <img src={Icon} alt="icon" />
          <div className="error-block__title">Неизвестная ошибка</div>
        </div>
        <p className="error-block__text">Что-то пошло не так</p>
        <Button className="error-block__btn" variant="orange" onClick={onClose}>
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default ErrorBlock;
