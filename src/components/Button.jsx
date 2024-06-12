import styles from "./Button.module.css";
import { clsx } from "clsx";

export function Button({ variant, disabled, size, children, ...props }) {
  return (
    <button
      className={clsx([styles.button, styles[variant], styles[size]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
