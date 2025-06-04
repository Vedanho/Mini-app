import {  useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import { useTelegram } from "../../hooks/useTelegram";
import Logo from "/common/logo.png";
import "./index.scss";
import Button from "../../components/ui/Button";
import clsx from "clsx";
import HeroesCheck from "../../components/HeroesCheck";
import { Input } from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import { requestContact } from "@telegram-apps/sdk";

enum PageContent {
  StartContent = 1,
  AuthButtons = 2,
  HeroCheck = 3,
  Registration = 4,
}

const AuthPage = () => {
  const { isLoading } = useTelegram();
  const [step, setStep] = useState(PageContent.StartContent);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const StartContent = () => {
    return (
      <Button className="auth-page__intro-btn" onClick={() => setStep(PageContent.AuthButtons)}>
        Начать
      </Button>
    );
  };

  const AuthButtons = () => {
    return (
      <div className="auth-page__auth-btns">
        <Button className="auth-btn" onClick={() => setStep(PageContent.Registration)}>
          Зарегистрироваться
        </Button>
        <Button className="auth-btn" onClick={() => setStep(PageContent.HeroCheck)}>
          Начать без регистрации
        </Button>
        <Button
          className="auth-btn"
          onClick={async () => {
            console.log(requestContact.isAvailable())
            if (requestContact.isAvailable()) {
              const contact = await requestContact();
              console.log(contact);
            }
          }}
        >
          Получить контакты
        </Button>
      </div>
    );
  };

  const RegistrationForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Форма отправлена");
    };

    return (
      <form className="registration" onSubmit={handleSubmit}>
        <h2 className="registration__title">Регистрация</h2>
        <div className="registration__input-wrapp">
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Фамилия" />
          <Input type="text" placeholder="Отчество" />
          <Input type="text" placeholder="Дата рождения" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="+7(___)___-__-__" />
        </div>
        <div className="registration__checkbox-wrapper">
          <Checkbox
            className="registration__checkbox"
            label={
              <>
                Согласен с <a className="auth-link">условиями обработки</a> даннных
              </>
            }
          />
          <Checkbox
            className="registration__checkbox"
            label={
              <>
                Вступить в<a className="auth-link"> программу лояльности</a>
              </>
            }
          />
          <Checkbox className="registration__checkbox" label="Получать СМС рассылку" />
        </div>
        <Button
          className="registration__submit"
          type="submit"
          variant="orange"
          onClick={() => setStep(PageContent.HeroCheck)}
        >
          Продолжить
        </Button>
      </form>
    );
  };

  return (
    <div className="auth-page">
      <div className={clsx("auth-page__container", { container: step !== PageContent.HeroCheck })}>
        <div className="auth-page__inner">
          <div className="auth-page__logo-wrapper">
            <img
              className={clsx("auth-page__logo", {
                "auth-page__logo--mini": step !== PageContent.StartContent,
                "auth-page__logo--regist": step === PageContent.Registration,
              })}
              src={Logo}
            />
          </div>
          {step === PageContent.StartContent && <StartContent />}
          {step === PageContent.AuthButtons && <AuthButtons />}
          {step === PageContent.HeroCheck && <HeroesCheck />}
          {step === PageContent.Registration && <RegistrationForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
