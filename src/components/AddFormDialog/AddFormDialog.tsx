'use client';

import Dialog from '@/components/Dialog';
import { useState } from 'react';
import Form from '../Form/Form';
import { createTodo } from '@/actions';

interface Props {
  trigger: React.ReactNode;
  title: string;
}

export default function AddFormDialog({ trigger, title }: Props) {
  const [open, setOpen] = useState(false);

  const onSubmit = async (formData: FormData) => {
    try {
      await createTodo(formData);
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
      <Form onCancel={() => setOpen(false)} onSubmit={onSubmit} />
    </Dialog>
  );
}
