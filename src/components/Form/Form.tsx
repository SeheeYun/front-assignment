'use client';

import { useFormStatus } from 'react-dom';
import Button from '../Button';
import styles from './Form.module.scss';

interface Props {
  data?: {
    id: string;
    title: string;
    content: string;
  };
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

export default function Form({ data, onCancel, onSubmit }: Props) {
  const { pending } = useFormStatus();

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <form className={styles.form} action={onSubmit}>
      {data?.id && <input type="hidden" name="id" value={data?.id} />}
      <input
        type="text"
        name="title"
        placeholder="제목을 입력해주세요"
        required
        autoFocus
        className={`${styles.input}`}
        defaultValue={data?.title}
      />
      <textarea
        name="content"
        placeholder="내용을 입력해주세요"
        required
        rows={10}
        className={`${styles.input}`}
        defaultValue={data?.content}
      />
      <div className={styles.button_wrapper}>
        <Button onClick={handleCancel}>취소</Button>
        <Button type="submit" theme="primary" disabled={pending}>
          등록
        </Button>
      </div>
    </form>
  );
}
