'use client';

import { deleteTodo } from '@/actions';
import AlertDialog from '../AlertDialog';
import Button from '../Button';
import { useFormStatus } from 'react-dom';

interface Props {
  id: string;
  trigger: React.ReactNode;
}

export default function DeleteAlertDialog({ id, trigger }: Props) {
  const { pending } = useFormStatus();

  const handleSubmit = async (formData: FormData) => {
    try {
      await deleteTodo(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog
      trigger={trigger}
      action={
        <form action={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <Button theme="dangerous" type="submit" disabled={pending}>
            삭제
          </Button>
        </form>
      }
    >
      Todo를 정말 삭제하시겠습니까?
    </AlertDialog>
  );
}
