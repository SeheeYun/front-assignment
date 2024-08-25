'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../Button';
import styles from './Form.module.scss';
import Spinner from '../Spinner';

interface Props {
  data?: {
    id: string;
    title: string;
    content: string;
  };
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel: () => void;
  onIsDirtyChange?: (isDirty: boolean) => void;
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" theme="primary" disabled={pending}>
      {pending ? <Spinner width={20} height={20} /> : '등록'}
    </Button>
  );
}

export default function Form({
  data,
  onCancel,
  onSubmit,
  onIsDirtyChange,
}: Props) {
  const [formData, setFormData] = useState({
    title: data?.title || '',
    content: data?.content || '',
  });

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onCancel();
    },
    [onCancel]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!onIsDirtyChange) return;
    const isDirty =
      formData.title !== data?.title || formData.content !== data?.content;
    onIsDirtyChange(isDirty);
  }, [formData, data, onIsDirtyChange]);

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
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="내용을 입력해주세요"
        required
        rows={10}
        className={`${styles.input}`}
        value={formData.content}
        onChange={handleChange}
      />
      <div className={styles.button_wrapper}>
        <Button onClick={handleCancel}>취소</Button>
        <Submit />
      </div>
    </form>
  );
}
