import { Todo } from '@/types/data';
import Button from '../Button';
import Checkbox from '../Checkbox';
import styles from './TodoItem.module.scss';
import EditFormDialog from '../EditFormDialog';
import DeleteAlertDialog from '../DeleteAlertDialog';
import Icon from '../Icon';
import Link from 'next/link';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { id, title, content, completed } = todo;
  return (
    <li key={id} className={styles.li}>
      <div className={`${styles.flex} ${styles.header}`}>
        <div className={styles.flex}>
          <Checkbox todo={todo} />
          <h2
            className={`${styles.ellipsis} ${styles.title} ${
              completed ? styles.completed : ''
            }`}
          >
            {title}
          </h2>
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
          <Link href={`/todo/${id}`}>
            <Icon name="chevron-right" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <p className={styles.ellipsis} style={{ WebkitLineClamp: 2 }}>
          {content}
        </p>
      </div>
    </li>
  );
}
