'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { Todo } from '@/types/data';
import Form from '@/components/Form';
import { updateTodo } from '@/actions';
import Button from '@/components/Button';
import AlertDialog from '@/components/AlertDialog';

export default function EditTodoPage({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const router = useRouter();

  const handleBack = () => {
    router.push(`/todo/${params.id}`);
  };

  const handleSubmit = async (formData: FormData) => {
    if (!todo) return;

    try {
      await updateTodo(todo, formData);
      handleBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      setOpenAlert(true);
      return;
    }
    handleBack();
  };

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(`http://localhost:3001/todos/${params.id}`);
      const todoData: Todo = await res.json();
      setTodo(todoData);
    };
    fetchTodo();
  }, [params.id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Todo 수정하기</h2>
      <Form
        data={todo}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        onIsDirtyChange={setIsDirty}
      />
      <AlertDialog
        open={openAlert}
        onOpenChange={open => setOpenAlert(open)}
        actionButton={
          <Button theme="primary" onClick={handleBack}>
            확인
          </Button>
        }
      >
        변경사항이 있습니다. 정말로 닫으시겠습니까?
      </AlertDialog>
    </>
  );
}
