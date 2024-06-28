import { useCanvasPointDrawing } from '@entities/Canvas';
import { Button } from '@shared/ui/Button';
import { ButtonProps } from '@shared/ui/Button/button.types';

export const RemoveBackgroundButton = ({
  onClick,
  ...restButtonProps
}: ButtonProps) => {
  const { handleSetBackgroundImage } = useCanvasPointDrawing();

  const removeBackground = () => handleSetBackgroundImage(null);

  const removeBackgroundButtonText = 'reset';

  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        removeBackground();
        onClick?.(e);
      }}
      {...restButtonProps}
    >
      {removeBackgroundButtonText}
    </Button>
  );
};
