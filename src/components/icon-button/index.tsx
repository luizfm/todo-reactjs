import { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export enum IconButtonVariants {
  Blue = "blue",
  Ghost = "ghost",
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: string;
  icon?: JSX.Element;
  className?: string;
  variant?: IconButtonVariants;
};

export function IconButton({
  type,
  icon,
  className,
  variant = IconButtonVariants.Blue,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={classnames(
        styles["button-container"],
        styles[variant],
        className
      )}
      {...rest}
    >
      <span className={styles["icon"]}>{icon}</span>
    </button>
  );
}

export default IconButton;
