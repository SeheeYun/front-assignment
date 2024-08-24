import { Todo } from '@/types/data';
import AlertDialog from '../AlertDialog';
import Button from '../Button';
import Checkbox from '../Checkbox';
import styles from './TodoItem.module.scss';
import EditFormDialog from '../EditFormDialog';
import DeleteAlertDialog from '../DeleteAlertDialog';

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
      <div>
        <p>{content}</p>
      </div>
    </li>
  );
}
