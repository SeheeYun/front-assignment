import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import './styles.css';
import Button from '../Button';

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export default function AlertDialog({ trigger, children, title }: Props) {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        {trigger}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="AlertDialogOverlay" />
        <AlertDialogPrimitive.Content className="AlertDialogContent">
          <AlertDialogPrimitive.Title className="AlertDialogTitle">
            {title}
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className="AlertDialogDescription">
            {children}
          </AlertDialogPrimitive.Description>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
            <AlertDialogPrimitive.Cancel asChild>
              <Button>취소</Button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <Button type="submit" theme="primary">
                확인
              </Button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
