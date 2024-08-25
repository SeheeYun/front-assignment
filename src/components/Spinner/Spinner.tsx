import React from 'react';
import Icon from '../Icon';
import styles from './Spinner.module.scss';

const Spinner = ({ width = 12, height = 12 }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <Icon name="circle" width={width} height={height} color="#333" />
      </div>
    </div>
  );
};

export default Spinner;
