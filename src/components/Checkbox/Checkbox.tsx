import styles from './Checkbox.module.scss';

type CheckboxProps = {
  checked: boolean;
};

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
