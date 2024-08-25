import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import './styles.css';
import Button from '../Button';

interface Props {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  actionButton?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AlertDialog({
  trigger,
  children,
  actionButton,
  open,
  onOpenChange,
}: Props) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <AlertDialogPrimitive.Trigger asChild>
          {trigger}
        </AlertDialogPrimitive.Trigger>
      )}
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
            {actionButton && actionButton}
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
