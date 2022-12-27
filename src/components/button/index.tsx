import { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export enum ButtonVariant {
  Blue = "blue",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: string;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  className?: string;
  variant?: ButtonVariant;
  disabled: boolean;
};

export function Button({
  type,
  children,
  startAdornment,
  endAdornment,
  className,
  disabled,
  variant = ButtonVariant.Blue,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classnames(
        styles["button-container"],
        styles[variant],
        { [styles["disabled"]]: disabled },
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {Boolean(startAdornment) && (
        <span className={styles["icon"]}>{startAdornment}</span>
      )}
      {children}
      {Boolean(endAdornment) && (
        <span className={styles["icon"]}>{endAdornment}</span>
      )}
    </button>
  );
}

export default Button;
