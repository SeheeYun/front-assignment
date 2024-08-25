'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { Todo } from '@/types/data';
import Form from '@/components/Form';
import { updateTodo } from '@/actions';

export default function EditTodoPage({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState<Todo | null>(null);
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
    <main className={styles.main}>
      <h1>Todo 수정</h1>
      <Form data={todo} onCancel={handleBack} onSubmit={handleSubmit} />
    </main>
  );
}
