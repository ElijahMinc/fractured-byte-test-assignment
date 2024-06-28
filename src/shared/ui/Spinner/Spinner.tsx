import cn from 'classnames';
import styles from './Spinner.module.css';

interface SpinnerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner = ({ size = 'lg', className, ...rest }: SpinnerProps) => (
  <div
    className={cn(styles.wrapper, className, {
      [styles.lg]: size === 'lg',
      [styles.md]: size === 'md',
      [styles.sm]: size === 'sm',
    })}
    {...rest}
  >
    <div className={styles['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
