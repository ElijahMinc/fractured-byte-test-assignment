import { forwardRef } from 'react';
import { ButtonProps } from './button.types';

// styles
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ className, children, appearence, ...restProps }, ref) => (
  <button
    ref={ref}
    className={cn(styles.button, className, {
      [styles.primary]: appearence === 'primary',
      [styles.error]: appearence === 'error',
    })}
    {...restProps}
  >
    {children}
  </button>
));
