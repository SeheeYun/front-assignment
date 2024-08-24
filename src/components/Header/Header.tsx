import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>📋 Todo App</h1>
      </Link>
    </header>
  );
}
