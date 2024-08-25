'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    /**
     * 에러가 발생했을 때, 여기에 추가적인 에러 로깅 처리 로직을 작성할 수 있습니다.
     */

    console.error(error);
  }, [error]);

  return <ErrorBoundary onRetryClick={reset} />;
}
