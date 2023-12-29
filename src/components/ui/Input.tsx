import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import styles from './ui.module.css';

type InputProps = {
  labelText: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, ...otherProps }, ref) => {
    return (
      <label>
        {labelText}
        <input ref={ref} className={styles.input} {...otherProps} />
      </label>
    );
  }
);

export default Input;
