import styles from "./styles.module.scss";
import classnames from "classnames";

type ChipProps = {
  label: string;
  className?: string;
};

export function Chip({ label, className }: ChipProps) {
  return (
    <div className={classnames(styles["chip-container"], className)}>
      <p className={styles["label"]}>{label}</p>
    </div>
  );
}

export default Chip;
