import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  theme: 'primary' | 'dangerous';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
};

const Button = ({ children, theme, size = 'medium', onClick }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
