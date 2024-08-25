import styles from './page.module.scss';
import Button from '@/components/Button';
import { Todo } from '@/types/data';
import TodoItem from '@/components/TodoItem';
import AddFormDialog from '@/components/AddFormDialog';

async function fetchTodos() {
  const res = await fetch('http://localhost:3001/todos');
  const todos: Todo[] = await res.json();
  return todos;
}

export default async function TodoListPage() {
  const todos = await fetchTodos();

  return (
    <>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
      <div className={styles.button_wrapper}>
        <div className={styles.button}>
          <AddFormDialog
            trigger={
              <Button size="large" theme="primary">
                추가하기
              </Button>
            }
            title="Todo 추가하기"
          />
        </div>
      </div>
    </>
  );
}
