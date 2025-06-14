/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { useTelegram } from "../../hooks/useTelegram";
import Logo from "/common/logo.png";
import "./index.scss";
import Button from "../../components/ui/Button";
import clsx from "clsx";
import HeroesCheck from "../../components/HeroesCheck";
import RegistrationForm from "../../components/RegistrationForm";

import { getHeroMaxStats } from "../../api/hero";
import { Input } from "../../components/ui/Input";
import { useAuthStore } from "../../store/auth";

enum PageContent {
  LoginForm = 1,
  HeroCheck = 2,
  Registration = 3,
}

const LoginForm = () => {
  const { webApp } = useTelegram();
  const { auth, updateUserNickname } = useAuthStore();
  const [nickname, setNickname] = useState("");

  const handleAuth = async () => {
    if (!nickname) return;

    const timezone = -new Date().getTimezoneOffset() / 60;

    await Promise.all([auth({ initTgData: webApp?.initData, timezone }), updateUserNickname({ nickname })]);
  };

  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <h1 className="login-form__title">Введите свой ник</h1>
      <Input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="login-form__input"
        placeholder="Ник"
      />
      <Button className="login-form__btn" onClick={handleAuth} variant="orange" disabled={!nickname}>
        Войти
      </Button>
    </form>
  );
};

const AuthPage = () => {
  const { isLoading } = useTelegram();
  const [step, setStep] = useState(PageContent.LoginForm);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setStep(PageContent.HeroCheck);
    console.log(data);
  };

  useEffect(() => {
    const getData = async () => {
      await getHeroMaxStats();
    };
    getData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
          {step === PageContent.LoginForm && <LoginForm />}
          {step === PageContent.HeroCheck && <HeroesCheck />}
          {step === PageContent.Registration && <RegistrationForm onSubmit={onSubmit} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
