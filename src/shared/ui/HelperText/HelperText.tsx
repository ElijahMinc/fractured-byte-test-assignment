import styles from './HelperText.module.css';
import { IHelperTextProps } from './helper-text.props';
import cn from 'classnames';

export const HelperText = ({
  title,
  className,
  children,
  ...restProps
}: React.PropsWithChildren<IHelperTextProps>) => (
  <div className={cn(styles.wrapper, className)} {...restProps}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.description}>{children}</div>
  </div>
);
