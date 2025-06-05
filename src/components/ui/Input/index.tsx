import clsx from "clsx";
import "./index.scss";

type Props = {
  type: string;
  placeholder: string;
  hasError?: boolean;
  className?: string;
};

export const Input = ({ type, placeholder, hasError, className, ...rest }: Props) => {
  return (
    <input
      className={clsx("input", { "input--error": hasError, [className as string]: !!className })}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};
