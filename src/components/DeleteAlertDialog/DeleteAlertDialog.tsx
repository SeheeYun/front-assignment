'use client';

import { deleteTodo } from '@/actions';
import AlertDialog from '../AlertDialog';
import Button from '../Button';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Spinner from '../Spinner';

interface Props {
  id: string;
  trigger: React.ReactNode;
  redirectPath?: string;
}

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button theme="dangerous" type="submit" disabled={pending}>
      {pending ? <Spinner width={20} height={20} /> : '삭제'}
    </Button>
  );
}

export default function DeleteAlertDialog({
  id,
  trigger,
  redirectPath,
}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      await deleteTodo(formData);
      redirectPath && router.push(redirectPath);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog
      trigger={trigger}
      actionButton={
        <form action={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <DeleteButton />
        </form>
      }
      open={open}
      onOpenChange={open => setOpen(open)}
    >
      Todo를 정말 삭제하시겠습니까?
    </AlertDialog>
  );
}
