import React from 'react';
import { Layer, Stage } from 'react-konva';
import { IBaseCanvasProps } from './base-canvas.types';

export const BaseCanvas = ({
  width,
  height,
  children,
}: React.PropsWithChildren<IBaseCanvasProps>) => {
  return (
    <Stage width={width} height={height}>
      <Layer>{children}</Layer>
    </Stage>
  );
};
