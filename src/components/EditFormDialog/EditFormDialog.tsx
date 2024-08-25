'use client';

import Dialog from '@/components/Dialog';
import { useState } from 'react';
import Form from '../Form/Form';
import { Todo } from '@/types/data';
import { updateTodo } from '@/actions';
import AlertDialog from '../AlertDialog';
import Button from '../Button';

interface Props {
  trigger: React.ReactNode;
  title: string;
  todo: Todo;
}

export default function EditFormDialog({ trigger, title, todo }: Props) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (isDirty) {
      setOpenAlert(true);
      return;
    }
    setOpen(open);
  };

  const handleClose = () => {
    setIsDirty(false);
    setOpenAlert(false);
    setOpen(false);
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      await updateTodo(todo, formData);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog
        trigger={trigger}
        title={title}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Form
          data={todo}
          onCancel={() => handleOpenChange(false)}
          onSubmit={handleSubmit}
          onIsDirtyChange={setIsDirty}
        />
      </Dialog>
      <AlertDialog
        open={openAlert}
        onOpenChange={open => setOpenAlert(open)}
        actionButton={
          <Button theme="primary" onClick={handleClose}>
            확인
          </Button>
        }
      >
        변경사항이 있습니다. 정말로 닫으시겠습니까?
      </AlertDialog>
    </>
  );
}
