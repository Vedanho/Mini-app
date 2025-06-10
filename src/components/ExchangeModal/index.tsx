import { useState } from "react";
import Modal from "../Modal";
import ConfirmImg from "/discount/modal-confirm.png";
import SuccessResult from "/tasks/right-result.png";
import PointsBlock from "../PointsBlock";
import Button from "../ui/Button";
import "./index.scss";

enum Steps {
  ConfirmStep = 0,
  SuccessStep = 1,
  ErrorStep = 2,
}

const ExchangeModal = ({ isOpenModal, onClose }: { isOpenModal: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<number>(Steps.ConfirmStep);

  const renderContent = () => {
    if (step === Steps.ConfirmStep) {
      return (
        <div className="exchange-modal">
          <div className="exchange-modal__img">
            <img src={ConfirmImg} alt="discount" />
          </div>
          <PointsBlock icon="coins" iconHeight={70} iconWidth={62} points={30000} />
          <p className="exchange-modal__text">Ваш аккаунт в программе лояльности «Галамарт» пополниться на</p>
          <PointsBlock icon="coinsStack" iconHeight={48} iconWidth={53} points={30000} />
          <Button className="exchange-modal__btn" variant="orange" onClick={() => setStep(Steps.SuccessStep)}>
            Подтвердить обмен
          </Button>
        </div>
      );
    }

    if (step === Steps.SuccessStep) {
      return (
        <div className="exchange-modal exchange-modal--success">
          <div className="exchange-modal__img">
            <img src={SuccessResult} alt="discount" />
          </div>
          <p className="exchange-modal__text exchange-modal__text--success">Поздравляем, вы успешно соврешили обмен валюты</p>
          <PointsBlock icon="coinsStack" iconHeight={48} iconWidth={53} points={30000} />
          <Button className="exchange-modal__btn" variant="orange" onClick={onClose}>
            Продолжить
          </Button>
        </div>
      );
    }
  };

  return (
    <Modal isModalOpen={isOpenModal} onClose={onClose} className="exchange-modal-wrapper" isHideCloseButton={true}>
      {renderContent()}
    </Modal>
  );
};

export default ExchangeModal;
