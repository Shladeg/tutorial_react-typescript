import { ChangeEvent, FC, FormEvent, useState } from "react";

import { TodoFormValues } from "types";

import styles from "./form.module.scss";

interface TodoFormProps {
  onSubmit: (values: TodoFormValues) => void;
}

const TodoFrom: FC<TodoFormProps> = ({ onSubmit }) => {
  const initialState: TodoFormValues = {
    title: "",
  };

  const [state, setState] = useState<TodoFormValues>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    const name: string = target.name;
    const value: string = target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSumbit = (event: FormEvent): void => {
    event.preventDefault();

    onSubmit(state);

    setState(initialState);
  };

  return (
    <form className={styles.root} onSubmit={handleSumbit}>
      <div className={styles.fromItem}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title"
          value={state.title}
          required
          onChange={onChange}
        />
      </div>

      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
};

export default TodoFrom;
