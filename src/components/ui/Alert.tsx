import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import styles from './ui.module.css';

type AlertProps = {
  variant: 'success' | 'danger';
  children: React.ReactNode;
};

const Alert = ({ variant, children }: AlertProps) => {
  const [show, setShow] = useState(true);

  const isSuccessAlert = variant === 'success';
  const alertClassName = `${styles.alert} ${
    isSuccessAlert ? styles.alert_success : styles.alert_danger
  }`;

  if (!show) {
    return null;
  }

  return (
    <div className={alertClassName} role="alert">
      {children}
      <IoClose
        size={30}
        onClick={() => setShow(false)}
        className={styles.alert_close}
      />
    </div>
  );
};

export default Alert;
