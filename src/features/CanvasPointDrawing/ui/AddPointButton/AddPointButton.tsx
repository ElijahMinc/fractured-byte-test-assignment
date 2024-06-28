import { useCanvasPointDrawing } from '@entities/Canvas';
import { Button } from '@shared/ui/Button';
import { ButtonProps } from '@shared/ui/Button/button.types';
import { forwardRef } from 'react';

//styles
import styles from './AddPointButton.module.css';

export const AddPointButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, ...restButtonProps }, ref) => {
    const { points, handleSetPoints } = useCanvasPointDrawing();

    const addPoint = () => {
      const newPoint = { id: Date.now(), x: 0, y: 0 };
      handleSetPoints([...points, newPoint]);
    };

    const textButton = 'Add Point Manualy';

    return (
      <Button
        ref={ref}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          addPoint();
          onClick?.(e);
        }}
        className={styles.AddPointButton}
        {...restButtonProps}
      >
        {textButton}
      </Button>
    );
  }
);
