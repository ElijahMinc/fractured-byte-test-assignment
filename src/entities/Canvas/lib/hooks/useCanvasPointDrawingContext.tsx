import { CanvasPointDrawingContext } from '@entities/Canvas';
import { useContext } from 'react';

// only for our case
export const useCanvasPointDrawing = () =>
  useContext(CanvasPointDrawingContext);
