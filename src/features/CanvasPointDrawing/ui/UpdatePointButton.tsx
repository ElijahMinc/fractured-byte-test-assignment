import { useCanvasPointDrawing } from '@entities/Canvas';
import { Button } from '@shared/ui/Button';
import { IUpdatePointBtnProps } from '../types/update-point-btn-props';
import { updatePointsIntoLocalStorage } from '../lib/helpers/updatePointFromLocalStorage';

export const UpdatePointButton = ({
  id,
  newCoords,
  onClick,
  ...restBtnProps
}: IUpdatePointBtnProps) => {
  const { points, handleSetPoints } = useCanvasPointDrawing();

  const updatePoint = () => {
    handleSetPoints(
      points.map((point) =>
        point.id === id ? { ...point, ...newCoords } : point
      )
    );
    updatePointsIntoLocalStorage(newCoords, id);
  };

  const textButton = 'Update Point';

  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        updatePoint();
        onClick?.(e);
      }}
      {...restBtnProps}
    >
      {textButton}
    </Button>
  );
};
