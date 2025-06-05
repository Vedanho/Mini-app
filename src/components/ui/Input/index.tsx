import clsx from "clsx";
import "./index.scss";

type Props = {
  type: string;
  placeholder: string;
  hasError?: boolean;
};

export const Input = ({ type, placeholder, hasError, ...rest }: Props) => {
  return (
    <input className={clsx("input", { "input--error": hasError })} type={type} placeholder={placeholder} {...rest} />
  );
};
