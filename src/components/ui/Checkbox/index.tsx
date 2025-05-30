import clsx from "clsx";
import "./index.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox = ({ label, checked, onChange, className }: CheckboxProps) => {
  return (
    <label className={clsx("checkbox", className)}>
      <input type="checkbox" className="checkbox__input" checked={checked} onChange={onChange} />
      <div className="checkbox__custom">
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.05997 12.2426C2.54824 12.244 2.04737 12.3883 1.61531 12.6588C1.18324 12.9293 0.83765 13.3149 0.618504 13.771C0.399359 14.2271 0.315619 14.7352 0.376972 15.2363C0.438325 15.7374 0.642265 16.2111 0.965196 16.6027L7.84933 24.9208C8.09479 25.2214 8.40942 25.46 8.76709 25.6166C9.12477 25.7732 9.51516 25.8433 9.90585 25.8212C10.7414 25.777 11.4958 25.3361 11.9768 24.6111L26.2769 1.89477C26.2793 1.89097 26.2817 1.88722 26.2842 1.88352C26.4184 1.68031 26.3749 1.27761 26.0979 1.02462C26.0218 0.955151 25.9321 0.901777 25.8344 0.867788C25.7366 0.833799 25.6328 0.819915 25.5293 0.826991C25.4259 0.834068 25.325 0.861954 25.233 0.908934C25.1409 0.955913 25.0595 1.02099 24.9939 1.10016C24.9887 1.10638 24.9835 1.11251 24.978 1.11855L10.5562 17.191C10.5013 17.2521 10.4346 17.3019 10.3601 17.3375C10.2855 17.373 10.2046 17.3936 10.1219 17.398C10.0392 17.4024 9.95646 17.3906 9.87846 17.3632C9.80045 17.3358 9.72875 17.2933 9.6675 17.2384L4.88116 12.9421C4.38406 12.4927 3.73434 12.2431 3.05997 12.2426Z"
            fill="#FF7700"
          />
        </svg>
      </div>
      <span className="checkbox__text">{label}</span>
    </label>
  );
};

export default Checkbox;
