import styles from './page.module.scss';
import Button from '@/components/Button';
import { Todo } from '@/types/data';
import Checkbox from '@/components/Checkbox';
import EditFormDialog from '@/components/EditFormDialog';
import DeleteAlertDialog from '@/components/DeleteAlertDialog';

async function fetchTodo(id: string) {
  const res = await fetch(`http://localhost:3001/todos/${id}`);
  const todo: Todo = await res.json();
  return todo;
}

export default async function TodoPage({ params }: { params: { id: string } }) {
  const todo = await fetchTodo(params.id);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  const { id, title, content, completed } = todo;
  return (
    <main className={styles.main}>
      <div className={`${styles.flex} ${styles.header}`}>
        <div className={styles.flex}>
          <Checkbox todo={todo} />
          <h2 className={completed ? styles.completed : ''}>{title}</h2>
        </div>
        <div className={styles.flex}>
          <EditFormDialog
            todo={todo}
            trigger={<Button>수정</Button>}
            title="Todo 수정하기"
          />
          <DeleteAlertDialog
            id={id}
            trigger={<Button theme="dangerous">삭제</Button>}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </main>
  );
}
