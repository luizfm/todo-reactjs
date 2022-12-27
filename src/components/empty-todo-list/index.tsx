import { Clipboard } from "phosphor-react";
import styles from "./styles.module.scss";

export function EmptyTodoList() {
  return (
    <div className={styles["empty-todo-list-container"]}>
      <Clipboard size={48} className={styles["clipboard-icon"]} />
      <p className={styles["empty-text"]}>
        You don't have any registered tasks yet
      </p>
      <p className={styles["create-tasks-text"]}>
        Create tasks and organize your todo list
      </p>
    </div>
  );
}

export default EmptyTodoList;
