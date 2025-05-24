import clsx from "clsx";
import type { ButtonProps } from "./types";
import "./index.scss";
import { useTelegram } from "../../../hooks/useTelegram";

const Button = ({ children, className, variant = "white", ...props }: ButtonProps) => {
  const { webApp } = useTelegram();
  const buttonVariants: Record<string, string> = {
    white: "button--white",
    orange: "button--orange",
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }

    if (webApp) {
      webApp.HapticFeedback.impactOccurred("light");
    }
  };

  return (
    <button className={clsx("button", className, buttonVariants[variant])} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
