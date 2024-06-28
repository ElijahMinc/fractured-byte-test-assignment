import { CanvasSizes } from '@entities/Canvas/constants/canvas-sizes';

export const getWithinCanvasLayoutStatus = (coords: {
  x: number;
  y: number;
}) => {

  const isAvailableWidth = CanvasSizes.WIDTH >= coords.x && coords.x >= 0;
  const isAvailableHeight = CanvasSizes.HEIGHT >= coords.y && coords.y >= 0;

  return isAvailableWidth && isAvailableHeight;
};
