import { useCanvasPointDrawing } from '@entities/Canvas';
import { useEffect } from 'react';
import { addPointsIntoLocalStorage } from '../helpers/addPointsIntoLocalStorage';

export const useAddPointByKeyboard = () => {
  const { points, handleSetPoints } = useCanvasPointDrawing();

  const handleTriggerAddPoint = (e: KeyboardEvent) => {
    if (e.code.toUpperCase() !== 'SPACE') return;
    const newPoint = { id: Date.now(), x: 0, y: 0 };
    handleSetPoints([...points, newPoint]);
    addPointsIntoLocalStorage(newPoint);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleTriggerAddPoint);

    return () => {
      window.removeEventListener('keydown', handleTriggerAddPoint);
    };
  }, [JSON.stringify(points)]);
};
