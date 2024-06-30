import { useCanvasPointDrawing } from '@entities/Canvas';
import { Button } from '@shared/ui/Button';
import { IDeletePointBtnProps } from '../types/delete-point-btn.props';
import { deletePointsIntoLocalStorageById } from '../lib/helpers/deletePointsIntoLocalStorageById';

export const DeletePointButton = ({ id }: IDeletePointBtnProps) => {
  const { points, handleSetPoints } = useCanvasPointDrawing();

  const deletePoint = () => {
    handleSetPoints(points.filter((point) => point.id !== id));
    deletePointsIntoLocalStorageById(id)
  };
  const textButton = 'Delete Point';

  return <Button onClick={deletePoint}>{textButton}</Button>;
};
