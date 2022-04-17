import { FC, useState } from "react";
import { ITodo, TodoFormValues } from "types";

import TodoFrom from "./components/form";

import styles from "./todo.module.scss";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onSubmit = (values: TodoFormValues) => {
    const newTodo: ITodo = {
      id: new Date().getTime().toString(6),
      ...values,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const onDelete = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.root}>
      <TodoFrom onSubmit={onSubmit} />

      <div className={styles.list}>
        {todos.map((todo, index) => (
          <div key={todo.id} className={styles.item}>
            <span>{`${index}. ${todo.title}`}</span>

            <button className={styles.button} onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
