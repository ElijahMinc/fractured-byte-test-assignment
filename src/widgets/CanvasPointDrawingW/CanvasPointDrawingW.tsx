import {
  AddPointButton,
  BackgroundImageUploader,
  CanvasPointDrawing,
  HelperTextPointDrawing,
  PointDrawingList,
  useAddPointByKeyboard,
} from '@features/CanvasPointDrawing';

export const CanvasPointDrawingW = () => {
  useAddPointByKeyboard();

  return (
    <>
      <AddPointButton />
      <BackgroundImageUploader />
      <CanvasPointDrawing />
      <PointDrawingList />
      <HelperTextPointDrawing />
    </>
  );
};
