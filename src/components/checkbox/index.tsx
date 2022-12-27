import { InputHTMLAttributes, useCallback } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";
import IconButton, { IconButtonVariants } from "../icon-button";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  todoId: string | number;
  label: string;
  isCompleted: boolean;
  className?: string;
  endAdornment?: JSX.Element;
  onToggle: (todoId: string | number) => void;
  onEndAdornmentClick?: (todoId: string | number) => void;
};

export function Checkbox({
  id,
  todoId,
  label,
  isCompleted,
  endAdornment,
  onToggle,
  onEndAdornmentClick,
  className,
}: CheckboxProps) {
  const handleChange = useCallback(() => {
    onToggle(todoId);
  }, []);

  const onDeleteClick = useCallback(() => {
    onEndAdornmentClick?.(todoId);
  }, []);

  return (
    <div className={classnames(styles["checkbox-container"], className)}>
      <input
        className={styles["checkbox"]}
        type="checkbox"
        id={id}
        tabIndex={-1}
        onChange={handleChange}
        checked={isCompleted}
      />
      <label htmlFor={id} className={styles["label"]}>
        <span className={styles["before"]} />
        <span>{label}</span>
      </label>
      {Boolean(endAdornment) && (
        <div className={styles["icon-button-wrapper"]}>
          <IconButton
            icon={endAdornment}
            className={styles["end-adornment"]}
            type="button"
            onClick={onDeleteClick}
            variant={IconButtonVariants.Ghost}
          />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
