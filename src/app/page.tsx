import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>할일을 관리해보세요!</h1>
      <Link href="/todo-list" className={styles.button}>
        시작하기
      </Link>
    </div>
  );
}
