'use client';

import Dialog from '@/components/Dialog';
import { useState } from 'react';
import Form from '../Form/Form';
import { Todo } from '@/types/data';
import { updateTodo } from '@/actions';

interface Props {
  trigger: React.ReactNode;
  title: string;
  todo: Todo;
}

export default function EditFormDialog({ trigger, title, todo }: Props) {
  const [open, setOpen] = useState(false);

  const onSubmit = async (formData: FormData) => {
    try {
      await updateTodo(todo, formData);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      trigger={trigger}
      title={title}
      open={open}
      onOpenChange={open => setOpen(open)}
    >
      <Form data={todo} onCancel={() => setOpen(false)} onSubmit={onSubmit} />
    </Dialog>
  );
}
