import { ICanvasContext } from '@entities/Canvas/types/canvas-context.type';
import { createContext } from 'react';

// only for our case
export const CanvasPointDrawingContext = createContext<ICanvasContext>({
  points: [],
  backgroundImage: null,
  handleSetBackgroundImage: () => {},
  handleSetPoints: () => {},
});
