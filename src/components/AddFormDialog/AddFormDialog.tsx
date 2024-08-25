'use client';

import Dialog from '@/components/Dialog';
import { useState } from 'react';
import Form from '../Form/Form';
import { createTodo } from '@/actions';
import AlertDialog from '../AlertDialog';

interface Props {
  trigger: React.ReactNode;
  title: string;
}

export default function AddFormDialog({ trigger, title }: Props) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const onSubmit = async (formData: FormData) => {
    try {
      await createTodo(formData);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setOpenAlert(true);
    }
  };

  return (
    <>
      <Dialog
        trigger={trigger}
        title={title}
        open={open}
        onOpenChange={open => setOpen(open)}
      >
        <Form onCancel={() => setOpen(false)} onSubmit={onSubmit} />
      </Dialog>
      <AlertDialog open={openAlert} onOpenChange={open => setOpenAlert(open)}>
        에러가 발생했습니다. 잠시 후 다시 시도해주세요.
      </AlertDialog>
    </>
  );
}
