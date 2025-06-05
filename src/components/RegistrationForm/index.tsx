import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../ui/Button";

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
          render={({ field }) => <Input type="text" placeholder="Имя" hasError={!!errors.firstName} {...field} />}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input type="text" placeholder="Фамилия" hasError={!!errors.lastName} {...field} />}
        />
        <Controller
          name="middleName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input type="text" placeholder="Отчество" hasError={!!errors.middleName} {...field} />}
        />
        <Controller
          name="birthDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input type="text" placeholder="Дата рождения" {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input type="email" placeholder="Email" {...field} />}
          rules={{ required: true }}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input type="tel" placeholder="+7(___)___-__-__" {...field} />}
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
              className="registration__checkbox"
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
              Вступить в<a className="auth-link"> программу лояльности</a>
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
