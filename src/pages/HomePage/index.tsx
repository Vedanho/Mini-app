import PointsElements from "../../components/PointsElements";

import Hero from "../../components/Hero";
import EnergyIcon from "/home-page/energy-icon.png";
import Logo from "/home-page/gold-logo.png";

import "./index.scss";
import ProgressBar from "../../components/ProgressBar";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import RegistrationForm from "../../components/RegistrationForm";
import Modal from "../../components/Modal";
import { useRegister } from "../../context/RegistContext";
import ErrorBlock from "../../components/ErrorBlock";
import { useHeroStore } from "../../store/hero";

const NoticeBlock = ({
  setIsShowRegistration,
  setIsShowNotice,
}: {
  setIsShowRegistration: (val: boolean) => void;
  setIsShowNotice: (val: boolean) => void;
}) => {
  return (
    <div className="notice-block">
      <div className="notice-block__inner">
        <div className="notice-block__title">Давайте копить бонусы вместе</div>
        <Button
          className="notice-block__btn"
          variant="orange"
          onClick={() => {
            setIsShowRegistration(true);
            setIsShowNotice(false);
          }}
        >
          Регистрация
        </Button>
        <Button
          className="notice-block__btn notice-block__btn--white"
          variant="white"
          onClick={() => setIsShowNotice(false)}
        >
          Позже
        </Button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [tabCount, setTabCount] = useState(0);
  const maxValue = 100;
  const [isShowRegistration, setIsShowRegistration] = useState(false);
  const [_, setIsShowNotice] = useState(false);
  const [showError, setShowError] = useState(false);

  const { isRegistered } = useRegister();
  const { energy, maxEnergy } = useHeroStore();

  useEffect(() => {
    if (tabCount % 5 === 0 && !!tabCount && isRegistered === "unregistered") {
      setIsShowNotice(true);
    }
  }, [tabCount]);

  const onTap = () => {
    if (tabCount >= maxValue) {
      return;
    }
    setTabCount((prev) => prev + 1);
  };

  return (
    <div className="tap-screen">
      <div className="tap-screen__container container">
        <PointsElements />
        <ProgressBar  maxValue={maxValue} />
        <div className="tap-screen__content">
          <Hero onTap={onTap} />
          <div className="tap-screen__bottom-content">
            <div className="tap-screen__energy-block">
              <img src={EnergyIcon} alt="energy" onClick={() => setShowError(true)} />
              <div className="tap-screen__energy">
                <span className="tap-screen__title">Энергия</span>
                <span className="tap-screen__energy-count">{energy}/{maxEnergy}</span>
              </div>
            </div>
            <div className="tap-screen__logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      {false && <NoticeBlock setIsShowRegistration={setIsShowRegistration} setIsShowNotice={setIsShowNotice} />}
      {isShowRegistration && (
        <Modal isModalOpen={isShowRegistration} onClose={() => setIsShowRegistration(false)}>
          <RegistrationForm onSubmit={() => console.log(123)} />
        </Modal>
      )}
      {showError && <ErrorBlock onClose={() => setShowError(false)} />}
    </div>
  );
};

export default HomePage;
