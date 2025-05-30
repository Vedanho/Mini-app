import "./index.scss";

type Props = {
  type: string;
  placeholder: string;
};

export const Input = ({ type, placeholder }: Props) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};
