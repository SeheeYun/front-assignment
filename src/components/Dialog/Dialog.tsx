import * as DialogPrimitive from '@radix-ui/react-dialog';
import './styles.css';

export interface DialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Dialog({
  trigger,
  children,
  title,
  open,
  onOpenChange,
}: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="DialogOverlay" />
        <DialogPrimitive.Content
          className="DialogContent"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="DialogTitle">
            {title}
          </DialogPrimitive.Title>
          {children}
          <DialogPrimitive.Close asChild>
            <button className="IconButton" aria-label="Close">
              x
            </button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
