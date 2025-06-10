/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { useTelegram } from "../../hooks/useTelegram";
import Logo from "/common/logo.png";
import "./index.scss";
import Button from "../../components/ui/Button";
import clsx from "clsx";
import HeroesCheck from "../../components/HeroesCheck";
import RegistrationForm from "../../components/RegistrationForm";
import { useRegister } from "../../context/RegistContext";
import { auth } from "../../api/auth";

enum PageContent {
  AuthButtons = 1,
  HeroCheck = 2,
  Registration = 3,
}

const AuthPage = () => {
  const { isLoading, webApp } = useTelegram();
  const { setIsRegistered } = useRegister();
  const [step, setStep] = useState(PageContent.AuthButtons);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setStep(PageContent.HeroCheck);
    console.log(data);
  };
  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleAuth = async () => {
    const timezone = -new Date().getTimezoneOffset() / 60;

    await auth({ initTgData: webApp?.initData, timezone });
  };

  const AuthButtons = () => {
    return (
      <div className="auth-page__auth-btns">
        <Button className="auth-btn" onClick={handleAuth}>
          Зарегистрироваться
        </Button>
        <Button
          className="auth-btn"
          onClick={() => {
            setStep(PageContent.HeroCheck);
            setIsRegistered("unregistered");
          }}
        >
          Начать без регистрации
        </Button>
        {/* <Button
          className="auth-btn"
          onClick={async () => {
            webApp.requestContact((data) => {
              console.log("Contact requested", data);
            });
          }}
        >
          Получить контакты
        </Button> */}
      </div>
    );
  };

  return (
    <div className="auth-page">
      <div className={clsx("auth-page__container", { container: step !== PageContent.HeroCheck })}>
        <div className="auth-page__inner">
          <div className="auth-page__logo-wrapper">
            <img
              className={clsx("auth-page__logo auth-page__logo--mini", {
                "auth-page__logo--regist": step === PageContent.Registration,
              })}
              src={Logo}
            />
          </div>
          {step === PageContent.AuthButtons && <AuthButtons />}
          {step === PageContent.HeroCheck && <HeroesCheck />}
          {step === PageContent.Registration && <RegistrationForm onSubmit={onSubmit} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
