import { type ComponentPropsWithoutRef } from 'react';
import styles from './ui.module.css';

type ButtonProps = {} & ComponentPropsWithoutRef<'button'>;

export default function Button(props: ButtonProps) {
  return <button className={styles.button} {...props}></button>;
}
