import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import './styles.css';
import Button from '../Button';

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function AlertDialog({ trigger, children, action }: Props) {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        {trigger}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="AlertDialogOverlay" />
        <AlertDialogPrimitive.Content className="AlertDialogContent">
          <AlertDialogPrimitive.Description className="AlertDialogDescription">
            {children}
          </AlertDialogPrimitive.Description>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
            <AlertDialogPrimitive.Cancel asChild>
              <Button>닫기</Button>
            </AlertDialogPrimitive.Cancel>
            {action && action}
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
