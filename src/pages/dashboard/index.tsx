import { PlusCircle, Trash, X } from "phosphor-react";
import React, { useCallback, useContext, useState } from "react";
import { v4 } from "uuid";

import { Button } from "../../components/button";
import Checkbox from "../../components/checkbox";
import Chip from "../../components/chip";
import EmptyTodoList from "../../components/empty-todo-list";
import { Input } from "../../components/input";
import { TodoContext } from "../../todo-context";

import styles from "./styles.module.scss";

export function Dashboard() {
  const { todoList, addTodo, toggleTodo, removeTodo } = useContext(TodoContext);
  const completedTodos = todoList.filter((todo) => todo.isCompleted).length;
  const todosSize = todoList.length;
  const [taskLabel, setTaskLabel] = useState("");

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setTaskLabel(value);
    },
    []
  );

  const onCreateTask = useCallback(() => {
    event?.preventDefault();

    addTodo({ id: v4(), isCompleted: false, label: taskLabel });
    setTaskLabel("");
  }, [taskLabel]);

  const onToggleTodo = useCallback((todoId: string | number) => {
    toggleTodo(todoId);
  }, []);

  const onDeleteClick = useCallback((todoId: string | number) => {
    removeTodo(todoId);
  }, []);

  const isTaskLabelEmpty = taskLabel.length === 0;

  const doneTasksText =
    todosSize === 0 ? "0" : `${completedTodos} of ${todosSize}`;

  return (
    <div className={styles["dashboard-container"]}>
      <form className={styles["todo-form"]} onSubmit={onCreateTask}>
        <Input
          label="Add a new task"
          hiddenLabel
          value={taskLabel}
          onChange={onInputChange}
          placeholder="Add a new task"
        />
        <Button
          className={styles["submit-button"]}
          type="submit"
          endAdornment={<PlusCircle size={20} />}
          disabled={isTaskLabelEmpty}
        >
          Create
        </Button>
      </form>
      <div className={styles["dashboard-todo-content"]}>
        <div className={styles["todo-list-header"]}>
          <p className={styles["created-tasks"]}>
            Created tasks <Chip label={String(todosSize)} />
          </p>
          <p className={styles["done-tasks"]}>
            Done
            <Chip label={doneTasksText} />
          </p>
        </div>
        {todosSize > 0 ? (
          <ul className={styles["todo-list"]}>
            {todoList.map((todo) => (
              <li className={styles["todo-list-item"]} key={todo.id}>
                <Checkbox
                  id={`todo-checkbox-item-${todo.id}`}
                  todoId={todo.id}
                  label={todo.label}
                  isCompleted={todo.isCompleted}
                  onToggle={onToggleTodo}
                  onEndAdornmentClick={onDeleteClick}
                  endAdornment={<Trash size={20} />}
                />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyTodoList />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
