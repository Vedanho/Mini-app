import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../ui/Button";
import "./index.scss";

const RegistrationForm = ({ onSubmit }: { onSubmit: SubmitHandler<FieldValues> }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <form className="registration" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="registration__title">Регистрация</h2>
      <div className="registration__input-wrapp">
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Имя"
              hasError={!!errors.firstName}
              className="registration__input"
              {...field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Фамилия"
              hasError={!!errors.lastName}
              {...field}
              className="registration__input"
            />
          )}
        />
        <Controller
          name="middleName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Отчество"
              hasError={!!errors.middleName}
              className="registration__input"
              {...field}
            />
          )}
        />
        <Controller
          name="birthDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Дата рождения"
              hasError={!!errors.birthDate}
              className="registration__input"
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input type="email" placeholder="Email" {...field} />}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input hasError={!!errors.phone} type="tel" className="registration__input" placeholder="+7(___)___-__-__" {...field} />
          )}
        />
      </div>
      <div className="registration__checkbox-wrapper">
        <Controller
          name="offerAgreement"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Checkbox
              hasError={!!errors.offerAgreement}
              className="registration__checkbox required"
              label={
                <>
                  Согласен с <a className="auth-link">условиями обработки</a> даннных
                </>
              }
              {...field}
            />
          )}
        />
        <Checkbox
          className="registration__checkbox"
          label={
            <>
              Вступить в<a className="auth-link"> программу лояльности "Галамарт"</a>
            </>
          }
        />
        <Checkbox className="registration__checkbox" label="Получать СМС рассылку" />
      </div>
      <Button className="registration__submit" type="submit" variant="orange">
        Продолжить
      </Button>
      {!!Object.values(errors)?.length && (
        <div className="registration__error-text">Для регистрации заполните обязательные поля</div>
      )}
    </form>
  );
};
export default RegistrationForm;
