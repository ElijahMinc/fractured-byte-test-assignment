import { HelperText } from '@shared/ui/HelperText';
import styles from './HelperTextPointDrawing.module.css';

export const HelperTextPointDrawing = () => {
  const title = 'Hello 👋';

  const PointDrawingText = () => (
    <ul className={styles.list}>
      <li>
        Press{' '}
        <i>
          <code>"SPACE"</code>
        </i>{' '}
        for create new <i>Point</i>;
      </li>
      <li>
        You can <i>Drag and Drop</i> <i>Points</i>;
      </li>
    </ul>
  );

  // WRITE STYLES
  return (
    <HelperText className={styles.helperText} title={title}>
      {PointDrawingText()}
    </HelperText>
  );
};
