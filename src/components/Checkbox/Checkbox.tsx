'use client';

import { Todo } from '@/types/data';
import styles from './Checkbox.module.scss';
import { toggleTodoCompleted } from '@/actions';

type CheckboxProps = {
  todo: Todo;
};

export default function Checkbox({ todo }: CheckboxProps) {
  const handleChange = async () => {
    await toggleTodoCompleted(todo);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
