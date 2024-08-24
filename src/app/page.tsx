import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>할일을 관리해보세요!</h1>
      <Link href="/todo-list" className={styles.button}>
        시작하기
      </Link>
    </main>
  );
}
