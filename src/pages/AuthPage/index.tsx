import { useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { useTelegram } from "../../hooks/useTelegram";
import Logo from "/common/logo.png";
import "./index.scss";
import Button from "../../components/ui/Button";
import clsx from "clsx";
import HeroesCheck from "../../components/HeroesCheck";

enum PageContent {
  StartContent = 1,
  AuthButtons = 2,
  HeroCheck = 3,
}

const AuthPage = () => {
  const { isLoading } = useTelegram();
  const [step, setStep] = useState(PageContent.StartContent);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const StartContent = () => {
    return (
      <Button className="auth-page__intro-btn" onClick={() => setStep(2)}>
        Начать
      </Button>
    );
  };

  const AuthButtons = () => {
    return (
      <div className="auth-page__auth-btns">
        <Button className="auth-btn">Зарегистрироваться</Button>
        <Button className="auth-btn" onClick={() => setStep(3)}>
          Войти
        </Button>
      </div>
    );
  };

  return (
    <div className="auth-page">
      <div className={clsx("auth-page__container", { container: step !== PageContent.HeroCheck })}>
        <div className="auth-page__inner">
          <img
            className={clsx("auth-page__logo", {
              "auth-page__logo--mini": step !== PageContent.StartContent,
            })}
            src={Logo}
          />
          {step === PageContent.StartContent && <StartContent />}
          {step === PageContent.AuthButtons && <AuthButtons />}
          {step === PageContent.HeroCheck && <HeroesCheck />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
