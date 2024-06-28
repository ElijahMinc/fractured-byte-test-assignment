import { CanvasSizes } from '@entities/Canvas/constants/canvas-sizes';
import { toast } from 'react-toastify';

export const showWarningAlarmCanvasLayout = () => {
  toast.warn("You can't set values larger than the canvas ");
  toast.info(
    `Canvas values: WIDTH=${CanvasSizes.WIDTH}; HEIGHT=${CanvasSizes.HEIGHT}`
  );
};
