import styles from './page.module.scss';
import Button from '@/components/Button';
import { Todo } from '@/types/data';
import Checkbox from '@/components/Checkbox';
import DeleteAlertDialog from '@/components/DeleteAlertDialog';
import Link from 'next/link';

async function fetchTodo(id: string) {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    next: { revalidate: 0 },
  });
  const todo: Todo = await res.json();
  return todo;
}

export default async function TodoPage({ params }: { params: { id: string } }) {
  const todo = await fetchTodo(params.id);

  if (!todo) {
    return <div>일치하는 Todo가 없습니다.</div>;
  }

  const { id, title, content, completed } = todo;
  return (
    <>
      <div className={`${styles.flex} ${styles.header}`}>
        <div className={styles.flex}>
          <Checkbox todo={todo} />
          <h2
            className={`${styles.title} ${completed ? styles.completed : ''}`}
          >
            {title}
          </h2>
        </div>
        <div className={styles.flex}>
          <Button size="large">
            <Link href={`/todo/${id}/edit`}>수정</Link>
          </Button>
          <DeleteAlertDialog
            id={id}
            trigger={
              <Button theme="dangerous" size="large">
                삭제
              </Button>
            }
            redirectPath="/todo-list"
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </>
  );
}
