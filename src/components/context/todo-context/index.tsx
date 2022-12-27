import React, { useCallback, useState } from "react";

type TodoType = {
  id: string | number;
  label: string;
  isCompleted: boolean;
};

type TodoDefaultValues = {
  todoList: TodoType[];
  addTodo: (value: TodoType) => void;
  removeTodo: (todoId: string | number) => void;
  toggleTodo: (todoId: string | number) => void;
};

const defaultValues: TodoDefaultValues = {
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
};

export const TodoContext = React.createContext(defaultValues);

type TodoWrapperProps = {
  children: React.ReactNode;
};

export function TodoWrapper({ children }: TodoWrapperProps) {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const addTodo = useCallback((todo: TodoType) => {
    setTodoList((prevValue) => [...prevValue, todo]);
  }, []);

  const removeTodo = useCallback((todoId: string | number) => {
    setTodoList((prevValue) => prevValue.filter((todo) => todo.id !== todoId));
  }, []);

  const toggleTodo = useCallback((todoId: string | number) => {
    setTodoList((prevValue) => {
      return prevValue.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoWrapper;
