import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'default' | 'primary' | 'dangerous';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  children,
  theme = 'default',
  size = 'medium',
  ...props
}: Props) {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
