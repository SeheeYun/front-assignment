import * as DialogPrimitive from '@radix-ui/react-dialog';
import './styles.css';

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export default function Dialog({ trigger, children, title }: Props) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="DialogOverlay" />
        <DialogPrimitive.Content className="DialogContent">
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
