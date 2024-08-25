import Link from 'next/link';
import styles from './ErrorBoundary.module.scss';
import Button from '../Button';

interface Props {
  onRetryClick: () => void;
}

export default function ErrorBoundary({ onRetryClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1>에러가 발생했습니다.</h1>
      <div className={styles.button_wrapper}>
        <Button size="large" onClick={onRetryClick}>
          다시시도
        </Button>
        <Button size="large">
          <Link href="/todo-list">홈으로 가기</Link>
        </Button>
      </div>
    </div>
  );
}
