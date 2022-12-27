import { InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  className?: string;
  hiddenLabel?: boolean;
};

export function Input({
  id,
  label,
  error,
  hiddenLabel,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={classnames(styles["input-container"], className)}>
      {!hiddenLabel && (
        <label className={styles["input-label"]} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={classnames(styles["input"], {
          [styles["error"]]: Boolean(error),
        })}
        {...rest}
      />
      {Boolean(error) && <p className={styles["error-message"]}>{error}</p>}
    </div>
  );
}

export default Input;
